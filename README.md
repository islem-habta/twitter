# Social Media App

A modern, full-stack social media application built with Next.js 15, featuring real-time interactions, user authentication, and a beautiful UI.

## 🚀 Features

- **User Authentication**: Secure authentication powered by Clerk
- **Social Interactions**: 
  - Create and share posts with text and images
  - Like and comment on posts
  - Follow/unfollow other users
  - Real-time notifications
- **User Profiles**: 
  - Customizable user profiles with bio, location, and website
  - Profile pictures and cover images
  - User activity feed
- **Modern UI**: 
  - Responsive design with Tailwind CSS
  - Dark/light theme support
  - Mobile-first approach
  - Beautiful animations and transitions
- **File Uploads**: Image uploads powered by UploadThing
- **Database**: SQLite database with Prisma ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Authentication**: Clerk
- **Database**: SQLite with Prisma ORM
- **File Uploads**: UploadThing
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with:
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # UploadThing
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

This application is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## 📱 Usage

- **Sign up/Sign in**: Use the authentication system to create an account
- **Create Posts**: Share your thoughts with text and images
- **Interact**: Like, comment, and follow other users
- **Customize Profile**: Update your profile information and picture
- **Stay Connected**: Receive notifications for interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and modern web technologies.
