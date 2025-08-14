#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Social Media App Environment Setup');
console.log('=====================================\n');

// Create .env.local template
const envTemplate = `# Database Configuration
# Choose one of these options:
# 1. Vercel Postgres (recommended for Vercel deployment)
DATABASE_URL="postgresql://username:password@host:port/database"

# 2. Supabase (free tier available)
# DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"

# 3. Neon (free tier available)
# DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database"

# Clerk Authentication
# Get these from: https://clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_publishable_key"
CLERK_SECRET_KEY="sk_test_your_clerk_secret_key"

# UploadThing File Uploads
# Get these from: https://uploadthing.com
UPLOADTHING_SECRET="sk_live_your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"

# Optional: Custom domain (if you have one)
# NEXT_PUBLIC_APP_URL="https://yourdomain.com"
`;

// Create .env.local file
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env.local template file');
} else {
  console.log('⚠️  .env.local already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Set up Clerk Authentication:');
console.log('   - Go to https://clerk.com');
console.log('   - Create account and new application');
console.log('   - Copy your API keys to .env.local');
console.log('');
console.log('2. Set up UploadThing:');
console.log('   - Go to https://uploadthing.com');
console.log('   - Create account and new project');
console.log('   - Copy your API keys to .env.local');
console.log('');
console.log('3. Set up Database:');
console.log('   - Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres');
console.log('   - Supabase: https://supabase.com');
console.log('   - Neon: https://neon.tech');
console.log('');
console.log('4. Update .env.local with your actual values');
console.log('');
console.log('5. Deploy to Vercel with environment variables');
console.log('   - Go to your Vercel project settings');
console.log('   - Add the same environment variables there');
console.log('');
console.log('🎉 Your app will be fully functional once these are set up!');
