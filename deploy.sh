#!/bin/bash
FILE_LOG="deploy.log"

# clear log
echo "" >> $FILE_LOG

# install dependencies
echo "Installing dependencies..." >> $FILE_LOG
npm install --force --silent

# build
echo "Building..." >> $FILE_LOG
npm run build

# deploy
echo "Deploying..." >> $FILE_LOG
if pm2 list | grep -q 'online'; then #verifica si hay un servicio corriendo
    pm2 reload ecosystem.config.js --env production
else
    npm run deploy
fi

# success
echo "Deployment successful!" >> $FILE_LOG