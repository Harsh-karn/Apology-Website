#!/bin/bash

# This script prepares your project for Netlify deployment

echo "Preparing your romantic apology website for Netlify deployment..."

# Create the deploy directory
mkdir -p netlify-deploy

# Copy essential files
echo "Copying essential files..."
cp -r client netlify-deploy/
cp -r attached_assets netlify-deploy/
cp -r public netlify-deploy/
cp deploy-scripts/netlify.toml netlify-deploy/netlify.toml
cp deploy-scripts/vite.config.ts netlify-deploy/vite.config.ts
cp deploy-scripts/package.json netlify-deploy/package.json
cp tailwind.config.ts netlify-deploy/
cp postcss.config.js netlify-deploy/
cp tsconfig.json netlify-deploy/
cp components.json netlify-deploy/
cp NETLIFY_DEPLOYMENT_GUIDE.md netlify-deploy/

# Create _redirects file
echo "Creating _redirects file..."
echo "/* /index.html 200" > netlify-deploy/public/_redirects

echo ""
echo "Deployment package created in the 'netlify-deploy' directory!"
echo ""
echo "Next steps:"
echo "1. Download the 'netlify-deploy' directory to your computer"
echo "2. Create an account on netlify.com"
echo "3. Drag and drop the netlify-deploy folder to Netlify's dashboard"
echo "4. Your romantic apology website will be live in a few minutes!"
echo ""
echo "For detailed instructions, see NETLIFY_DEPLOYMENT_GUIDE.md in the netlify-deploy folder."