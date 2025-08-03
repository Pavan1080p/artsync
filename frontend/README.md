# 🎨 Artsync - Artist Collaboration Platform

A modern, cinematic platform where artists unite to create, collaborate, and connect. Built with cutting-edge web technologies for an immersive creative experience.

## ✨ Features

- **Real-time Collaboration**: Work seamlessly with artists worldwide
- **Artist Portfolios**: Stunning portfolio layouts for creative professionals  
- **Project Creation**: Start projects, find collaborators, bring visions to life
- **Dark Theme**: Immersive dark-mode experience with neon accents
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Built with shadcn/ui components and Framer Motion

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library
- **Package Manager**: pnpm (recommended)

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- pnpm, npm, or yarn

### Quick Start

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd artsync-platform

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
\`\`\`

### Alternative Installation Methods

\`\`\`bash
# Using npm
npm install && npm run dev

# Using yarn  
yarn install && yarn dev
\`\`\`

## 📁 Project Structure

\`\`\`
artsync-platform/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Main landing page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components (organized)
│   │   ├── form/                 # Form components (Button, Input, etc.)
│   │   ├── navigation/           # Navigation components
│   │   ├── feedback/             # Feedback components (Toast, Badge, etc.)
│   │   └── layout/               # Layout components (Card, Sheet, etc.)
│   ├── sections/                 # Page section components
│   │   ├── HeroSection.tsx       # Hero with animated headline
│   │   ├── FeatureSection.tsx    # Platform highlights
│   │   ├── ProjectShowcase.tsx   # Project grid/cards
│   │   └── Testimonials.tsx      # User testimonials
│   └── layout/                   # Layout components
│       ├── AnimatedLogo.tsx      # Animated Artsync logo
│       ├── Navigation.tsx        # Main navigation
│       └── Footer.tsx            # Site footer
├── lib/
│   └── utils.ts                  # Utility functions
├── __tests__/                    # Test files
│   └── components/
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── vitest.config.ts              # Testing configuration
└── package.json                  # Dependencies
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Pink (#ff3cac), Violet (#845ec2), Cyan (#38f9d7), Purple (#9f44d3)
- **Background**: Black to Navy gradient (#0a0a0a → #0f0c29)
- **Effects**: Glow effects with 10-20px blur radius

### Typography
- **Headings**: Bold display fonts with gradient text effects
- **Body**: Clean sans-serif (Inter/Manrope)
- **Effects**: Neon glow drop shadows for display text

## 🚀 Development Commands

\`\`\`bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Testing
pnpm test             # Run unit tests
pnpm test:ui          # Run tests with Vitest UI
pnpm test:coverage    # Run tests with coverage report
\`\`\`

## 🗺️ Roadmap

### Phase 1: Core Platform ✅
- [x] Landing page with hero section
- [x] Feature showcase
- [x] Project gallery
- [x] Testimonials section
- [x] Responsive design
- [x] Dark theme with animations

### Phase 2: User System 🚧
- [ ] User authentication (Supabase/NextAuth)
- [ ] User profiles and portfolios
- [ ] Artist onboarding flow
- [ ] Profile customization

### Phase 3: Collaboration Features 📋
- [ ] Real-time project collaboration
- [ ] File sharing and version control
- [ ] Comment and feedback system
- [ ] Project management tools

### Phase 4: Community Features 📋
- [ ] Artist discovery and search
- [ ] Following/follower system
- [ ] Community forums
- [ ] Events and workshops

### Phase 5: Advanced Features 📋
- [ ] AI-powered artist matching
- [ ] Integrated payment system
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Make your changes
4. Run tests: \`pnpm test\`
5. Commit changes: \`git commit -m 'Add amazing feature'\`
6. Push to branch: \`git push origin feature/amazing-feature\`
7. Open a Pull Request

### Code Standards
- Use TypeScript for all new code
- Follow the existing component structure
- Write tests for new components
- Use conventional commit messages
- Ensure responsive design
- Maintain accessibility standards

### Component Guidelines
- Place reusable UI components in \`components/ui/\`
- Place page sections in \`components/sections/\`
- Use barrel exports (\`index.ts\`) for clean imports
- Follow the established naming conventions
- Include proper TypeScript types

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Radix UI](https://www.radix-ui.com/) for accessible primitives

## 📞 Support

- 📧 Email: support@artsync.com
- 💬 Discord: [Join our community](https://discord.gg/artsync)
- 🐛 Issues: [GitHub Issues](https://github.com/artsync/platform/issues)
- 📖 Docs: [Documentation](https://docs.artsync.com)

---

**Built with ❤️ for creators, by creators.**
