# 🔧 Environment Variables Setup

## Create .env.local file in your project root:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_publishable_key"
CLERK_SECRET_KEY="sk_test_your_clerk_secret_key"

# UploadThing File Uploads
UPLOADTHING_SECRET="sk_live_your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"
```

## Quick Setup Steps:

### 1. **Clerk Setup** (2 minutes)
1. Go to [clerk.com](https://clerk.com)
2. Sign up and create application
3. Copy API keys from dashboard
4. Replace the placeholder values in `.env.local`

### 2. **UploadThing Setup** (2 minutes)
1. Go to [uploadthing.com](https://uploadthing.com)
2. Sign up and create project
3. Copy API keys from dashboard
4. Replace the placeholder values in `.env.local`

### 3. **Database Setup** (1 minute)
**Option A: Vercel Postgres**
1. Go to [Vercel Dashboard](https://vercel.com/islems-projects-9bb88426/my-app)
2. Storage → Create Database
3. Copy connection string

**Option B: Supabase**
1. Go to [supabase.com](https://supabase.com)
2. Create project
3. Settings → Database → Connection string

### 4. **Add to Vercel**
1. Go to [Vercel Environment Variables](https://vercel.com/islems-projects-9bb88426/my-app/settings/environment-variables)
2. Add all variables from `.env.local`
3. Redeploy: `vercel --prod`

## 🎯 Your app will be fully functional once these are set up!
