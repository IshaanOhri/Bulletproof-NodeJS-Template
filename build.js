#!/usr/bin/env node
import logger from './src/logger/config';

const childProcess = require('child_process');
const fs = require('fs');

logger.info('Building application...');
const { env } = process;
env.NODE_ENV = 'production';
childProcess.execSync('gulp', {
	env,
	stdio: [0, 1, 2]
});

logger.debug('Correcting package.json...');
const pkg = JSON.parse(fs.readFileSync('./package.json').toString());
if (pkg.scripts && pkg.scripts.start)
	pkg.scripts.start = `NODE_ENV=production ${pkg.scripts.start
		.replace('ts-node', 'node')
		.replace('.ts', '.js')}`;
if (pkg.devDependencies) delete pkg.devDependencies;
fs.writeFileSync('./bin/package.json', JSON.stringify(pkg, null, '\t'));

logger.debug('Installing production dependencies...');
childProcess.execSync('npm install --only=production', {
	cwd: './bin',
	env,
	stdio: [0, 1, 2]
});
