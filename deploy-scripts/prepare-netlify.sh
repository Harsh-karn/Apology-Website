#!/bin/bash

# This script prepares your project for Netlify deployment

echo "Preparing your romantic apology website for Netlify deployment..."

# Create necessary directories
mkdir -p netlify-deploy
mkdir -p netlify-deploy/client

# Copy important files for Netlify
cp netlify.toml netlify-deploy/
cp -r public netlify-deploy/
cp -r client netlify-deploy/
cp -r attached_assets netlify-deploy/
cp vite.config.ts netlify-deploy/
cp tsconfig.json netlify-deploy/
cp tailwind.config.ts netlify-deploy/
cp postcss.config.js netlify-deploy/
cp components.json netlify-deploy/

# Create a simplified package.json for Netlify
cat > netlify-deploy/package.json << EOF
{
  "name": "romantic-apology-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "@types/react-helmet": "^6.1.11",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "framer-motion": "^11.18.2",
    "lucide-react": "^0.453.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet": "^6.1.0",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "wouter": "^3.3.5",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
EOF

# Create README file for the deployment
cat > netlify-deploy/README.md << EOF
# Romantic Apology Website

A heartfelt apology website with beautiful animations, personal photos, and a letter from the heart.

## Deployment Instructions

This project is configured for Netlify deployment.

1. Upload this entire folder to Netlify through their drag-and-drop interface
2. Or connect your GitHub repository if you've pushed this code there
3. Make sure to use the following build settings:
   - Build command: \`vite build\`
   - Publish directory: \`dist\`

## Features

- Beautiful animated hero section
- Heartfelt letter with animated text reveal
- Photo gallery with personal memories
- Promises section
- Direct contact buttons for call and text
EOF

# Create a simplified index.html that points to the client one
cat > netlify-deploy/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="refresh" content="0;url=/client/" />
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to the apology letter...</p>
</body>
</html>
EOF

echo "Created netlify-deploy directory with all necessary files."
echo ""
echo "To deploy to Netlify:"
echo "1. Download the netlify-deploy directory"
echo "2. Go to app.netlify.com and drag-and-drop the folder"
echo "3. Or use Netlify CLI to deploy from your local machine"
echo ""
echo "Your romantic apology website will be live in minutes!"