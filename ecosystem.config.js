module.exports = {
  apps: [
    {
      name: 'bulletproof-nodejs-template',
      script: './bin/index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: ''
      }
    }
  ]
};
