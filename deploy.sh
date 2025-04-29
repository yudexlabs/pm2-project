#!/bin/bash

# install dependencies
echo "Installing dependencies..."
npm install --force --silent

# build
echo "Building..."
npm run build

# deploy
echo "Deploying..."
npm run deploy

# success
echo "Deployment successful!"