# Devarshi Wadadkar - AI/ML Portfolio

A modern, interactive portfolio website showcasing Devarshi's expertise in Data Science, Machine Learning, and GenAI development. Built with Next.js 15, TypeScript, and AI-powered chat functionality.

## 🌟 Live Demo

**🌐 Website**: [dwadadkar.me](https://dwadadkar.me)

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions
- **Interactive Elements**: Hover effects, loading states, and fluid cursors

### 🤖 **AI-Powered Chat Interface**
- **Intelligent Conversations**: OpenAI-powered chat with context awareness
- **Tool Integration**: Dynamic tool calls for skills, experience, and project information
- **Real-time Responses**: Streaming chat responses with typing indicators
- **Smart Suggestions**: Quick question buttons for common inquiries

### 📱 **Interactive Components**
- **Dynamic Avatar**: Responsive character image that adapts to chat state
- **Project Carousel**: Swipeable project showcase with detailed descriptions
- **Experience Cards**: Animated cards with company logos and role details
- **Skills Display**: Categorized skills with color-coded badges
- **Contact Modal**: Professional contact form with multiple contact options

### 🎯 **Key Sections**
- **Hero Section**: Animated titles and character introduction
- **Projects Showcase**: Interactive project cards with previews
- **Experience Timeline**: Professional journey with company details
- **Skills Overview**: Technical and soft skills with visual indicators
- **Contact Integration**: Direct contact options and calendar booking

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15**: App Router with server-side rendering
- **React 19**: Latest React features and hooks
- **TypeScript**: Type-safe development

### **Styling & UI**
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

### **AI & Chat**
- **OpenAI SDK**: AI-powered chat functionality
- **Vercel AI SDK**: Streaming responses and tool calls
- **React Markdown**: Rich text rendering

### **Deployment & Analytics**
- **Vercel**: Production deployment and hosting
- **Vercel Analytics**: Performance monitoring
- **Custom Domain**: dwadadkar.me

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```
   
   Add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── chat/         # AI chat endpoints
│   │   │   └── github-stars/ # GitHub integration
│   │   ├── chat/             # Chat page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/            # React components
│   │   ├── chat/             # Chat interface
│   │   ├── projects/         # Project showcase
│   │   ├── ui/               # UI components
│   │   └── magicui/          # Special UI effects
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   ├── images/              # Project images
│   └── Devarshi.pdf         # Resume
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
└── vercel.json             # Vercel deployment config
```

## 🎨 Key Components

### **Chat Interface** (`src/components/chat/`)
- **Dynamic Avatar**: Responsive character that hides during conversations
- **Tool Integration**: Skills, experience, and project information tools
- **Streaming Responses**: Real-time AI responses with typing indicators
- **Theme Integration**: Persistent theme toggle in chat header

### **Project Showcase** (`src/components/projects/`)
- **Carousel Navigation**: Swipeable project cards
- **Interactive Previews**: Hover effects and detailed descriptions
- **Responsive Grid**: Adaptive layout for different screen sizes

### **Contact Modal** (`src/components/TalentContactModal.tsx`)
- **Professional Contact**: Multiple contact methods (email, LinkedIn, calendar)
- **Resume Download**: Direct PDF download link
- **Skills Overview**: Quick skills and experience summary
- **Responsive Design**: Mobile-optimized layout

## 🔧 Configuration

### **Environment Variables**
```env
OPENAI_API_KEY=your_openai_api_key
```

### **Vercel Configuration**
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install --legacy-peer-deps`

### **Custom Domain**
- **Primary**: dwadadkar.me
- **WWW**: www.dwadadkar.me
- **SSL**: Automatic HTTPS via Vercel

## 🚀 Deployment

### **Vercel Deployment**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### **Manual Deployment**
```bash
vercel --prod --force
```

## 🎯 Features in Detail

### **AI Chat Capabilities**
- **Context Awareness**: Remembers conversation history
- **Tool Calls**: Dynamic information retrieval
- **Streaming**: Real-time response generation
- **Error Handling**: Graceful error management

### **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Experience**: Enhanced features for larger screens

### **Performance Optimizations**
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports for better loading
- **Caching**: Vercel edge caching for fast delivery
- **Analytics**: Performance monitoring with Vercel Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Devarshi Wadadkar**
- **LinkedIn**: [devarshi8](https://www.linkedin.com/in/devarshi8/)
- **Portfolio**: [dwadadkar.me](https://dwadadkar.me)
- **Email**: Available through the contact modal

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For seamless deployment and hosting
- **OpenAI**: For AI capabilities
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations

---

⭐ **Star this repository if you found it helpful!**
