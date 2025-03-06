# Netlify Deployment Guide

This guide will walk you through deploying your BNB Chain Developer Services website to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://netlify.com) if you don't have one)
- Git installed on your computer
- Your project pushed to a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub

If you haven't already pushed your code to GitHub, follow the instructions in the `github-push-instructions.md` file.

### 2. Deploy to Netlify via the Netlify UI (Easiest Method)

1. Log in to your Netlify account at [app.netlify.com](https://app.netlify.com)
2. Click the "Add new site" button and select "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub repositories if prompted
5. Select the `Faracurs/bnb-chain-dev-services` repository
6. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Expand "Advanced build settings" and add the following environment variable:
   - Key: `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
   - Value: `f21da20092d77f52d7977bd5f0e6b071`
8. Click "Deploy site"

### 3. Deploy via Netlify CLI (Alternative Method)

If you prefer using the command line:

1. Install the Netlify CLI globally (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. Log in to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Give your site a name or accept the generated one

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Post-Deployment Steps

### 1. Configure Custom Domain (Optional)

1. In the Netlify dashboard, go to your site settings
2. Click on "Domain management"
3. Click "Add custom domain" and follow the instructions

### 2. Update WalletConnect Allowed Domains

1. Go to [cloud.reown.com](https://cloud.reown.com) and log in
2. Find your project with ID `f21da20092d77f52d7977bd5f0e6b071`
3. Add your Netlify domain (e.g., `your-site-name.netlify.app`) to the allowed domains list

### 3. Verify Deployment

1. Visit your deployed site
2. Test the wallet connection functionality
3. Ensure all components are loading correctly

## Troubleshooting

### Build Failures

If your build fails, check the build logs in Netlify for specific errors. Common issues include:

- Missing dependencies: Make sure all dependencies are properly listed in package.json
- Environment variables: Ensure all required environment variables are set
- Build command issues: Verify the build command is correct

### Wallet Connection Issues

If wallet connections aren't working:

1. Check that your WalletConnect Project ID is correctly set in the environment variables
2. Verify that your Netlify domain is added to the allowed domains in WalletConnect Cloud
3. Check the browser console for any errors

### Next.js Rendering Issues

If you encounter rendering issues:

1. Make sure the `@netlify/plugin-nextjs` plugin is installed and configured
2. Check that your `next.config.js` file is properly set up for Netlify
3. Consider using the Netlify Next.js Runtime for better compatibility

## Continuous Deployment

Netlify automatically sets up continuous deployment from your GitHub repository. Any changes pushed to your main branch will trigger a new deployment.

To disable automatic deployments:

1. Go to your site settings in Netlify
2. Navigate to "Build & deploy" > "Continuous deployment"
3. Click "Stop auto publishing"