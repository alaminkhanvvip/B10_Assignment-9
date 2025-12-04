# ❄️ Winter Clothing Donation Bangladesh

> **Connecting generous hearts with vulnerable communities across Bangladesh during winter months**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://winter-donation-a82f4.web.app)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

## 🌟 Overview

Winter Donation Bangladesh is a compassionate web platform that bridges the gap between donors and vulnerable communities across Bangladesh's six divisions. When winter arrives, thousands struggle to stay warm - this platform ensures warmth reaches those who need it most.

## ✨ Key Features

### 🏠 **Home Experience**
- **Interactive Banner Slider** - Swiper-powered winter-themed carousel
- **Mission Statement** - Clear explanation of our purpose
- **Step-by-Step Guide** - How the donation process works
- **Impact Statistics** - Real numbers showing our community impact
- **Call-to-Action** - Direct paths to start donating

### 🎯 **Smart Campaign System**
- **Division-Based Campaigns** - Targeted relief across all 6 Bangladesh divisions
- **Visual Campaign Cards** - Rich images and descriptions
- **Private Campaign Details** - Secure, authenticated donation forms
- **Form Validation** - React Hook Form ensures data integrity

### 🔐 **Robust Authentication**
- **Multiple Login Options** - Email/password + Google OAuth
- **Password Security** - Uppercase, lowercase, 6+ character validation
- **Password Visibility Toggle** - Enhanced user experience
- **Password Recovery** - Forgot password functionality
- **Route Protection** - Private routes for authenticated users

### 👤 **User Dashboard**
- **Profile Management** - View and update personal information
- **Personalized Welcome** - Greeting with user's name
- **Account Statistics** - Creation date and last sign-in tracking

### 📱 **Responsive Design**
- **Mobile-First Approach** - Optimized for all screen sizes
- **DaisyUI Components** - Consistent, beautiful styling
- **Cross-Device Compatibility** - Seamless experience everywhere

### ⚡ **Enhanced UX**
- **AOS Animations** - Smooth scroll-triggered animations
- **Toast Notifications** - Real-time user feedback
- **404 Error Handling** - Custom not-found page
- **Environment Security** - Protected Firebase configuration
- **Winter Theme** - Appropriate seasonal colors and imagery

## 🚀 Live Demo

**[Visit Winter Donation Bangladesh →](https://winter-donation-a82f4.web.app)**

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern UI library with latest features
- **React Router DOM 7.6.3** - Client-side routing and navigation

### **Authentication & Backend**
- **Firebase 11.10.0** - Authentication, hosting, and backend services

### **Styling & UI**
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Beautiful Tailwind CSS components
- **AOS 2.3.4** - Animate On Scroll library
- **Swiper 11.2.10** - Modern touch slider

### **Forms & Validation**
- **React Hook Form 7.60.0** - Performant form handling
- **React Hot Toast 2.5.2** - Elegant toast notifications

### **Development Tools**
- **Vite 7.0.0** - Lightning-fast build tool
- **ESLint 9.29.0** - Code quality and consistency
- **Autoprefixer 10.4.21** - CSS vendor prefixes

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### **Quick Start**

```bash
# Clone the repository
git clone https://github.com/alaminkhanvvip/B10_Assignment-9.git
cd B10_Assignment-9

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase config

# Start development server
npm run dev

# Build for production
npm run build
```

### **Environment Variables**

Create a `.env.local` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

## 🏗️ Project Structure

```
winter-donation/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/          # React contexts (Auth)
│   ├── data/              # Static data (campaigns.json)
│   ├── firebase/          # Firebase configuration
│   ├── hooks/             # Custom hooks (useTitle)
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── routers/           # Route configuration
│   ├── utils/             # Utility functions
│   └── constants/         # App constants
├── .github/workflows/     # GitHub Actions
└── dist/                  # Build output
```

## 🚀 Deployment

### **Firebase Hosting**
The project is configured for automatic deployment via GitHub Actions:

- **Production**: Deploys on push to `main` branch
- **Preview**: Creates preview deployments for pull requests

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## 🤝 How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🔒 Security Features

- **Environment Variables** - Sensitive data protected
- **Private Routes** - Authentication-protected pages
- **Form Validation** - Client-side input validation
- **Firebase Security** - Server-side authentication

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🙏 Acknowledgments

- **Firebase** for reliable backend services
- **Unsplash** for beautiful stock photography
- **DaisyUI** for elegant UI components
- **React Community** for excellent documentation
- **Bangladesh** for inspiring this humanitarian effort

---

<div align="center">

**Made with ❄️ for Bangladesh's winter relief efforts**

*Every donation brings warmth to a family in need*

</div>
