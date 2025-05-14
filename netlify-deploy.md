# Deploying to Netlify

This guide will help you deploy your romantic apology website to Netlify.

## Option 1: Deploy using the Netlify UI (Recommended)

1. **Create a Netlify account** if you don't have one already at [netlify.com](https://netlify.com)

2. **Prepare your build**:
   - Download your entire project as a zip file from Replit
   - Extract the zip file on your local computer

3. **Deploy to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com/)
   - Drag and drop your project folder to the Netlify UI
   - Or click "New site from Git" and connect your GitHub repository if you've pushed your code there

4. **Configure your build settings**:
   - Build command: `vite build`
   - Publish directory: `dist`

5. **Configure environment variables** (if needed):
   - Add any necessary environment variables in the Netlify UI

## Option 2: Deploy using Netlify CLI

1. **Install Netlify CLI**:
   ```
   npm install -g netlify-cli
   ```

2. **Log in to Netlify**:
   ```
   netlify login
   ```

3. **Initialize Netlify**:
   ```
   netlify init
   ```

4. **Deploy your site**:
   ```
   netlify deploy --prod
   ```

## Important Configuration Files

These files have been created in your project:

- `netlify.toml` - Configuration for Netlify
- `public/_redirects` - Ensures proper routing for single-page applications

## Custom Domain (Optional)

Once your site is deployed, you can add a custom domain in the Netlify UI:

1. Go to your site dashboard on Netlify
2. Click "Domain settings"
3. Follow the instructions to add and configure your custom domain

---

Your romantic apology website should be live on Netlify within minutes of deploying. The deployment will provide you with a URL that you can share with your girlfriend.