# Vercel Deployment Configuration

This document outlines the exact steps to deploy the portfolio to Vercel, including required environment variables and the CLI deployment sequence.

## 1. Environment Variables

Create a `.env.local` file locally, and ensure these variables are added to your Vercel project's settings:

- `NEXT_PUBLIC_BASE_URL`: The custom domain where your portfolio will live (e.g., `https://alexdeveloper.com`). This is critical for SEO, Open Graph images, and sitemaps.

*(If you add backend integrations later, such as a database or email service, add those keys here. For the current static configuration, only the base URL is strictly required).*

## 2. CLI Deployment Sequence

From a fresh start, here is the exact sequence of CLI commands to clone the template, configure it, and deploy it to production using the Vercel CLI.

```bash
# 1. Clone your customized repository (assuming you've pushed local changes to your own GitHub)
git clone https://github.com/your-username/your-portfolio-repo.git portfolio
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Authenticate with Vercel CLI (if not already logged in)
npx vercel login

# 4. Link the local repository to a Vercel project
# (Follow the interactive prompts to set up the project)
npx vercel link

# 5. Pull the Vercel environment variables down to test locally
npx vercel env pull .env.local

# 6. Deploy to the preview environment for a final check
npx vercel

# 7. Deploy to Production
npx vercel --prod
```

## 3. Vercel Configuration (`vercel.json`)

By default, Next.js applications require zero configuration on Vercel. The platform automatically detects the framework and optimizes the build. However, if you need to enforce strict caching rules or redirects, you can use the following `vercel.json` template:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```
*Note: Place `vercel.json` in the root directory.*
