module.exports = {
	apps: [
		{
			name: 'bulletproof-nodejs-template',
			script: './index.js',
			instances: 'max',
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
				HOST: '127.0.0.1',
				NEWRELIC_KEY: 'eu01xxfddc80f41ad0e6e258937387e653adNRAL'
			}
		}
	]
};
