# 🚀 Quick Setup Guide

## Your App is Already Deployed! 🎉
**Live URL**: https://my-n3q37nkfl-islems-projects-9bb88426.vercel.app

## ⚡ Quick Setup (5 minutes)

### 1. **Clerk Authentication** (2 minutes)
1. Go to [clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Go to API Keys in the dashboard
4. Copy your keys to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

### 2. **UploadThing File Uploads** (2 minutes)
1. Go to [uploadthing.com](https://uploadthing.com) and sign up
2. Create a new project
3. Go to API Keys in the dashboard
4. Copy your keys to `.env.local`:
   ```
   UPLOADTHING_SECRET=sk_live_...
   UPLOADTHING_APP_ID=...
   ```

### 3. **Database** (1 minute)
**Option A: Vercel Postgres (Easiest)**
1. Go to your [Vercel Dashboard](https://vercel.com/islems-projects-9bb88426/my-app)
2. Go to Storage → Create Database
3. Copy the connection string to `.env.local`:
   ```
   DATABASE_URL=postgresql://...
   ```

**Option B: Supabase (Free)**
1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string

### 4. **Deploy with Environment Variables**
1. Go to [Vercel Project Settings](https://vercel.com/islems-projects-9bb88426/my-app/settings/environment-variables)
2. Add all the environment variables from `.env.local`
3. Redeploy: `vercel --prod`

## 🎯 That's It!
Your social media app will be fully functional with:
- ✅ User authentication
- ✅ File uploads
- ✅ Database storage
- ✅ Real-time features

## 🔗 Useful Links
- **Your App**: https://my-n3q37nkfl-islems-projects-9bb88426.vercel.app
- **Vercel Dashboard**: https://vercel.com/islems-projects-9bb88426/my-app
- **GitHub Repo**: https://github.com/islem-habta/twitter
- **Clerk**: https://clerk.com
- **UploadThing**: https://uploadthing.com
- **Supabase**: https://supabase.com

---
**Need help?** Check the full [DEPLOYMENT.md](DEPLOYMENT.md) guide!
