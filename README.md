<div align="center">

  <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
  <img src="https://img.shields.io/badge/Bunny.net-F47326?style=for-the-badge&logo=bunnyvideo&logoColor=white" alt="bunny.net">
  <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />

  <h1 align="center">🎥 Learn-Rec</h1>
  <h3 align="center">Full Stack Screen Recording & Video Sharing Platform</h3>

  <p align="center">
    <strong>Record. Upload. Share. Transcribe.</strong>
  </p>

  <p align="center">
    A modern, secure video platform built with Next.js and Bunny.net featuring AI transcripts, privacy controls, and seamless sharing capabilities.
  </p>

</div>

---

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🤖 Introduction

**Learn-Rec** is a powerful full-stack video platform that combines screen recording, video management, and AI-powered transcription in one seamless application. Built with modern technologies like Next.js, Bunny.net CDN, and Better Auth, it provides enterprise-grade features with developer-friendly implementation.

### Why Learn-Rec?

- ✅ **Zero Setup Recording** - Start recording your screen instantly
- ✅ **AI-Powered Transcripts** - Automatic transcription for accessibility
- ✅ **Enterprise Security** - Bot protection, rate limiting, and attack prevention
- ✅ **Global CDN** - Lightning-fast video delivery worldwide
- ✅ **Privacy First** - Full control over video visibility
- ✅ **Developer Friendly** - Type-safe, modular, and well-documented

---

## 🔋 Features

### 🔐 Authentication & Security
- **Secure Authentication**: Multi-provider support with Better Auth (Email + Google OAuth)
- **Arcjet Protection**: Built-in bot detection, rate limiting, and DDoS protection
- **Email Validation**: Prevent fake signups with real-time email verification
- **Session Management**: Secure token-based authentication

### 🎬 Video Management
- **Screen Recording**: Native browser-based screen capture
- **Drag & Drop Upload**: Intuitive file upload with progress tracking
- **Privacy Controls**: Toggle between public/private visibility instantly
- **Smart Search**: Find videos quickly with full-text search
- **Shareable Links**: Generate unique URLs for easy distribution
- **Video Metadata**: Access IDs, URLs, duration, and more

### 🤖 AI & Intelligence
- **AI Transcripts**: Automatic speech-to-text transcription
- **Searchable Content**: Find specific moments in videos via transcript
- **Multi-language Support**: Transcribe videos in multiple languages

### 🎨 User Experience
- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Dark Mode Ready**: Eye-friendly interface for extended use
- **Mobile Responsive**: Works seamlessly on all devices
- **Real-time Updates**: Instant feedback on uploads and processing

### ⚡ Performance & Scalability
- **Global CDN**: Bunny.net edge network for 99.9% uptime
- **Adaptive Streaming**: Automatic quality adjustment based on bandwidth
- **Edge Storage**: Fast access to videos from nearest server
- **Database Branching**: Zero-downtime deployments with Xata
- **Type Safety**: Full TypeScript support with Drizzle ORM

---

## ⚙️ Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router, Server Actions, and SSR
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Backend & Database
- **[Xata](https://xata.io)** - Serverless PostgreSQL with auto-scaling and branching
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe ORM with migrations support

### Authentication & Security
- **[Better Auth](https://www.better-auth.com/)** - TypeScript-first auth library
- **[Arcjet](https://arcjet.com)** - Developer-first security platform (bot protection, rate limiting)

### Video & CDN
- **[Bunny.net](https://bunny.net)** - Global CDN, video streaming, and edge storage

### Key Libraries
- **React 19** - Latest React features
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching

---

## 🎬 Demo

> Add screenshots or GIF demos here

**Live Demo**: [Coming Soon](#)

### Preview Features:
1. **Recording Interface** - [Screenshot]
2. **Video Dashboard** - [Screenshot]
3. **AI Transcripts** - [Screenshot]
4. **Privacy Settings** - [Screenshot]

---

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Git** - [Download](https://git-scm.com/)
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/en)
- **npm/yarn/pnpm** - Package manager

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/ASHUTOSH-KUMAR-RAO/Learn-Rec.git
cd learn-rec
```

**2. Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then fill in your credentials (see [Environment Variables](#environment-variables) section)

**4. Set up the database**

```bash
# Generate Drizzle migrations
npm run db:generate

# Push schema to database
npm run db:push
```

**5. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🚀

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Database (Xata)
XATA_API_KEY=your_xata_api_key
DATABASE_URL_POSTGRES=your_postgres_connection_string

# Authentication (Better Auth)
BETTER_AUTH_SECRET=your_random_secret_key  # Generate with: openssl rand -base64 32
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Video Platform (Bunny.net)
BUNNY_STORAGE_ACCESS_KEY=your_bunny_storage_key
BUNNY_LIBRARY_ID=your_bunny_library_id
BUNNY_STREAM_ACCESS_KEY=your_bunny_stream_key

# Security (Arcjet)
ARCJET_API_KEY=your_arcjet_api_key
```

### How to Get API Keys:

| Service | Sign Up Link | Documentation |
|---------|-------------|---------------|
| **Xata** | [xata.io](https://xata.io) | [Xata Docs](https://xata.io/docs) |
| **Better Auth** | [better-auth.com](https://www.better-auth.com) | [Better Auth Guide](https://www.better-auth.com/docs) |
| **Google OAuth** | [console.cloud.google.com](https://console.cloud.google.com) | [OAuth Setup](https://developers.google.com/identity/protocols/oauth2) |
| **Bunny.net** | [bunny.net](https://bunny.net) | [Bunny Docs](https://docs.bunny.net) |
| **Arcjet** | [arcjet.com](https://arcjet.com) | [Arcjet Setup](https://docs.arcjet.com) |

---

## 📁 Project Structure

```
learn-rec/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── shared/           # Shared components
├── lib/                   # Utility functions
│   ├── auth.ts           # Auth configuration
│   ├── db.ts             # Database client
│   └── bunny.ts          # Bunny.net client
├── db/                    # Database schema
│   └── schema.ts         # Drizzle schema
├── public/               # Static assets
└── types/                # TypeScript types
```

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:generate     # Generate migrations
npm run db:push         # Push schema to DB
npm run db:studio       # Open Drizzle Studio

# Type checking
npm run type-check      # Check TypeScript types
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Bunny.net](https://bunny.net) for reliable video infrastructure
- [Xata](https://xata.io) for the developer-friendly database
- [Arcjet](https://arcjet.com) for security solutions
- All open-source contributors

---

## 📧 Contact

**Ashutosh Kumar Rao**

- GitHub: [@ASHUTOSH-KUMAR-RAO](https://github.com/ASHUTOSH-KUMAR-RAO)
- Project Link: [https://github.com/ASHUTOSH-KUMAR-RAO/Learn-Rec](https://github.com/ASHUTOSH-KUMAR-RAO/Learn-Rec)

---

<div align="center">
  <p>Made with ❤️ by Ashutosh Kumar Rao</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
