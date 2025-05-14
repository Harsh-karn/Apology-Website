# Deploying Your Romantic Apology Website to Netlify

This guide will walk you through deploying your romantic apology website to Netlify, a popular platform for hosting static websites.

## Option 1: Direct Upload Method (Easiest)

### Step 1: Download Your Project Files
1. Download your entire project from Replit by clicking on the three dots in the sidebar and selecting "Download as zip"
2. Extract the zip file on your computer

### Step 2: Prepare for Deployment
1. Keep only the front-end files needed for deployment:
   - `client/` directory
   - `attached_assets/` directory
   - `package.json` (use the simplified one in `deploy-scripts/package.json`)
   - `vite.config.ts` (use the simplified one in `deploy-scripts/vite.config.ts`)
   - `netlify.toml` (use the one in `deploy-scripts/netlify.toml`)
   - `tailwind.config.ts`
   - `postcss.config.js`
   - `tsconfig.json`
   - `components.json`
   - `public/` directory

### Step 3: Create a Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account (you can use GitHub, GitLab, Bitbucket, or email)

### Step 4: Deploy Your Site
1. Log in to your Netlify dashboard
2. Drag and drop your prepared project folder onto the Netlify dashboard where it says "Drag and drop your site folder here"
3. Wait for the upload to complete
4. Netlify will automatically detect your configuration and deploy your site

### Step 5: Configure Your Site
1. Once deployed, click on "Site settings"
2. You can change your site name under "General" → "Site details" → "Change site name"
3. Your site will be available at `https://your-site-name.netlify.app`

## Option 2: Using Netlify CLI (Advanced)

If you prefer using command line tools:

1. Install Netlify CLI globally:
   ```
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:
   ```
   netlify login
   ```

3. Initialize your site:
   ```
   netlify init
   ```

4. Deploy your site:
   ```
   netlify deploy --prod
   ```

## Option 3: Connecting to GitHub (For Ongoing Updates)

If you want to be able to update the site easily:

1. Push your code to a GitHub repository
2. In Netlify dashboard, click "New site from Git"
3. Choose GitHub as your Git provider and authorize Netlify
4. Select your repository
5. Configure build settings:
   - Build command: `vite build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Troubleshooting

If you encounter any issues:

1. Check your `netlify.toml` file to ensure it has the correct configuration
2. Make sure your `vite.config.ts` file is properly configured
3. Verify that all dependencies are listed in your `package.json`
4. Check Netlify's deploy logs for any error messages

## Need More Help?

- Visit [Netlify Documentation](https://docs.netlify.com/)
- Check out [Netlify Community Support](https://community.netlify.com/)

---

Your romantic apology website should be live within minutes after deploying to Netlify!