# Interactive Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and TypeScript featuring an advanced audio player with Canvas-based waveform visualization.

## 🚀 Features

- **Interactive Audio Player** - Canvas-based waveform with hover and click-to-seek functionality
- **Project Showcase** - Individual pages for each project with consistent layout
- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Performance Optimized** - Efficient rendering and audio processing

## 🛠️ Tech Stack

- **Framework:** Next.js 14.0.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Audio Processing:** Web Audio API
- **UI Components:** Radix UI
- **Notifications:** Sonner

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/haileyhsu94/interactive-portfolio-website.git

# Navigate to the project directory
cd interactive-portfolio-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🎵 Audio Player Features

- **Canvas-based Waveform** - High-performance audio visualization
- **Interactive Seeking** - Click anywhere on waveform to jump to position
- **Hover Effects** - Visual feedback for better user experience
- **Multi-track Support** - Switch between different project audio files
- **Real-time Progress** - Smooth progress updates during playback

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── projects/          # Individual project pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── InteractiveHome.tsx # Main portfolio component
├── utils/                # Utility functions
│   └── audioUtils.ts     # Audio processing utilities
├── public/               # Static assets
│   ├── audio/           # Audio files
│   └── images/          # Image assets
└── styles/              # Global styles
```

## 🔄 Version Control

### Current Version: v1.2.0

### Branching Strategy

- **`main`** - Production-ready code
- **`develop`** - Development branch for features
- **`feature/*`** - Feature branches
- **`hotfix/*`** - Critical bug fixes

### Git Workflow

1. **Feature Development:**
   ```bash
   git checkout -b feature/audio-player-enhancements
   # Make changes
   git add .
   git commit -m "feat: add interactive waveform seeking"
   git push origin feature/audio-player-enhancements
   ```

2. **Release Process:**
   ```bash
   git checkout main
   git merge develop
   git tag -a v1.2.0 -m "Release version 1.2.0"
   git push origin main --tags
   ```

## 📋 Changelog

### [v1.2.0] - 2024-01-15
#### Added
- Canvas-based audio waveform player
- Interactive hover and click-to-seek functionality
- 4 individual project pages (Airframe, BrainBox, Eatsy, Shelf Life)
- Audio processing utilities for waveform generation
- Performance optimizations for audio rendering

#### Changed
- Updated font sizes and colors in audio player
- Improved button styling and padding
- Enhanced UI component dependencies

#### Fixed
- Next.js configuration warnings
- Import path issues in project pages
- Audio player state management

### [v1.1.0] - 2024-01-10
#### Added
- Basic portfolio layout
- Project showcase sections
- Contact form
- Responsive design

### [v1.0.0] - 2024-01-05
#### Added
- Initial project setup
- Next.js configuration
- Basic styling with Tailwind CSS

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful commit messages
- Write descriptive component names

### Audio Files
- Supported formats: MP3, WAV
- Recommended bitrate: 128-320 kbps
- Place files in `public/audio/` directory

### Images
- Use WebP or PNG format
- Optimize for web (compress images)
- Place files in `public/images/` directory

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Hailey Hsu**
- Portfolio: [haileyhsu94.github.io](https://haileyhsu94.github.io)
- LinkedIn: [yu-hsuan-hsu](https://linkedin.com/in/yu-hsuan-hsu)
- Email: haileyhsu94@gmail.com

## 🙏 Acknowledgments

- Inspired by Troy Chryssos's audio waveform implementation
- Built with Next.js and React ecosystem
- UI components from Radix UI
- Icons from Lucide React 