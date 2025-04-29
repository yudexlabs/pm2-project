#!/bin/bash

FILE_LOG="deploy.log"

# clear log
echo "" > $FILE_LOG

# install dependencies
echo "Installing dependencies..." > $FILE_LOG
npm install --force --silent

# build
echo "Building..." > $FILE_LOG
npm run build

# deploy
echo "Deploying..." > $FILE_LOG
npm run deploy

# success
echo "Deployment successful!" > $FILE_LOG