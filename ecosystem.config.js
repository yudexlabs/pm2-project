module.exports = {
  apps : [{
    name   : "Servicio A",
    script : "./dist/server.js",
    cron_restart: "0 3 * * *",
    env: {
      NODE_ENV: "development",
      PORT: 4000
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 8080
    }
  }]
}
