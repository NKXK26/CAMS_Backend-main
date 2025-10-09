module.exports = {
  apps: [
    {
      name: 'cams-backend',
      script: 'server/server.js',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // Replace these placeholders with your real values or use a .env file
        DATABASE_URL: 'postgres://doadmin:CHANGE_ME@DO_HOST:DO_PORT/defaultdb',
        PG_SSL_CA_PATH: '/home/youruser/certs/do-ca.crt',
        EMAIL_USER: 'youremail@example.com',
        EMAIL_PASS: 'your-email-password'
      }
    }
  ]
};
