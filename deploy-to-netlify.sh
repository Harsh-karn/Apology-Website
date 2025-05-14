#!/bin/bash

# Create a build
echo "Building project..."
npm run build

# Create a deployment zip for Netlify
echo "Creating deployment zip..."
cd dist
zip -r ../netlify-deploy.zip *
cd ..

echo "Ready for Netlify deployment! Upload netlify-deploy.zip to Netlify manually."
echo "Instructions:"
echo "1. Go to app.netlify.com and log in or sign up"
echo "2. Drag and drop the netlify-deploy.zip file to deploy"
echo "3. Or click 'New site from Git' and connect your repository"
echo "4. Follow the prompts to complete deployment"