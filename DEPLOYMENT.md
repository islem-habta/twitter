# 🚀 Vercel Deployment Guide

## Prerequisites

1. **GitHub Repository**: Your code should be pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Clerk Account**: Set up authentication at [clerk.com](https://clerk.com)
4. **UploadThing Account**: Set up file uploads at [uploadthing.com](https://uploadthing.com)
5. **Database**: Set up a PostgreSQL database (recommended: Vercel Postgres, Supabase, or Neon)

## Step-by-Step Deployment

### 1. Database Setup

**Option A: Vercel Postgres (Recommended)**
1. Go to your Vercel dashboard
2. Navigate to Storage → Create Database
3. Choose PostgreSQL
4. Copy the connection string

**Option B: Supabase**
1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string

### 2. Environment Variables Setup

In your Vercel project dashboard, add these environment variables:

```env
# Database
DATABASE_URL=your_database_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

# UploadThing
UPLOADTHING_SECRET=sk_live_your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

### 3. Deploy to Vercel

1. **Connect Repository**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Select the repository

2. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./` (or leave empty)
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next`

3. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete

### 4. Database Migration

After deployment, run database migrations:

```bash
# In Vercel dashboard → Functions → Terminal
npx prisma db push
```

Or use Vercel CLI:
```bash
vercel env pull .env.local
npx prisma db push
```

### 5. Verify Deployment

1. Check your deployed URL
2. Test authentication flow
3. Test file uploads
4. Test database operations

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check environment variables are set correctly
   - Ensure all dependencies are in package.json

2. **Database Connection**:
   - Verify DATABASE_URL is correct
   - Check database is accessible from Vercel

3. **Authentication Issues**:
   - Verify Clerk keys are correct
   - Check domain is added to Clerk dashboard

4. **File Upload Issues**:
   - Verify UploadThing credentials
   - Check CORS settings

### Support:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [UploadThing Documentation](https://uploadthing.com/docs)

## Post-Deployment

1. **Set up custom domain** (optional)
2. **Configure analytics** (optional)
3. **Set up monitoring** (optional)
4. **Configure backups** for database
5. **Set up CI/CD** for automatic deployments

---

🎉 **Your social media app is now live!**
