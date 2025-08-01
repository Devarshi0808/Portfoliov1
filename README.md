# Devarshi Wadadkar - AI-Powered Portfolio

An interactive, AI-powered portfolio showcasing Devarshi's skills, experience, and projects with an animated avatar and intelligent chatbot.

## 🚀 Features

### ✨ Interactive AI Chatbot
- **Animated Avatar**: Custom genmoji that responds to conversations
- **Intelligent Responses**: Powered by AI to answer questions about skills, experience, and projects
- **Voice-like Experience**: Avatar animates when speaking
- **Multi-platform Support**: Video animation for desktop, static image for iOS

### 🎨 Modern UI/UX
- **Fluid Animations**: Smooth cursor effects and page transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Automatic theme switching
- **Interactive Elements**: Hover effects, animations, and micro-interactions

### 📱 Portfolio Sections
- **Work Experience**: Interactive cards with company logos and achievements
- **Projects Showcase**: Carousel of projects with detailed descriptions
- **Skills Display**: Visual representation of technical and soft skills
- **Contact Information**: Easy access to social profiles and contact details

### 🤖 AI Integration
- **Smart Q&A**: Ask questions about experience, skills, or projects
- **Contextual Responses**: AI understands portfolio-specific queries
- **Real-time Interaction**: Instant responses with animated avatar
- **Tool Integration**: Can fetch real-time data and perform actions

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives

### AI & Backend
- **AI SDK** - OpenAI integration
- **Vercel AI** - Streaming responses
- **React Markdown** - Rich text rendering
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Tailwind CSS** - PostCSS processing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devarshi0808/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### For Visitors
1. **Landing Page**: Explore the main portfolio with animated elements
2. **Chat Interface**: Click "Ask me anything" to interact with the AI avatar
3. **Quick Questions**: Use the preset buttons for common queries
4. **Project Exploration**: Click on project tiles for detailed information

### For Developers
1. **Component Structure**: Modular components in `src/components/`
2. **AI Integration**: Chat functionality in `src/app/api/chat/`
3. **Styling**: Tailwind CSS classes with custom animations
4. **State Management**: React hooks for local state

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── chat/              # Chat page
│   │   └── globals.css        # Global styles
│   ├── components/             # React components
│   │   ├── chat/              # Chat-related components
│   │   ├── ui/                # Reusable UI components
│   │   └── projects/          # Project showcase components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── public/                    # Static assets
│   ├── final_memojis.webm     # Animated avatar (WebM)
│   ├── final_memojis_ios.mp4  # Animated avatar (MP4)
│   └── landing-memojis.png    # Static avatar for iOS
└── package.json               # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
- `OPENAI_API_KEY`: OpenAI API key for chat functionality
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics ID (optional)

### Customization
- **Avatar**: Replace video files in `public/` directory
- **Content**: Update data in component files
- **Styling**: Modify Tailwind classes in components
- **AI Responses**: Customize prompts in `src/app/api/chat/`

## 🐛 Troubleshooting

### Common Issues

**Video not playing:**
- Check if video files exist in `public/` directory
- Ensure browser supports WebM/MP4 formats
- Check console for loading errors

**AI not responding:**
- Verify API keys are set correctly
- Check network connectivity
- Review API rate limits

**Build errors:**
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check TypeScript errors: `npm run lint`

### Development Tips
- Use `npm run dev` for development
- Check browser console for debugging info
- Use React DevTools for component inspection
- Monitor network tab for API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About

**Devarshi Wadadkar** - AI Developer & Data Scientist
- **GitHub**: [@Devarshi0808](https://github.com/Devarshi0808)
- **LinkedIn**: [Devarshi Wadadkar](https://www.linkedin.com/in/devarshi8/)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

⭐ **Star this repository if you found it helpful!**
