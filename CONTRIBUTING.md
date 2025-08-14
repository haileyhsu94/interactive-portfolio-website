# Contributing to Interactive Portfolio Website

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/interactive-portfolio-website.git
   cd interactive-portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### Branching Strategy
We follow a Git Flow-inspired branching strategy:

- **`master`** - Production-ready code
- **`develop`** - Development branch for features
- **`feature/*`** - Feature branches
- **`hotfix/*`** - Critical bug fixes
- **`release/*`** - Release preparation branches

### Creating a Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### Commit Message Convention
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add volume control to audio player"
git commit -m "fix: resolve audio playback issues on mobile"
git commit -m "docs: update README with new features"
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Code Quality Checks
```bash
# Run linter
npm run lint

# Run type checking
npm run type-check

# Fix linting issues automatically
npm run lint:fix
```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` type - use proper typing
- Use interfaces for object shapes
- Use enums for constants

### React Components
- Use functional components with hooks
- Use TypeScript interfaces for props
- Follow the naming convention: PascalCase
- Keep components focused and single-purpose
- Use proper prop validation

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Use CSS custom properties for theming
- Maintain consistent spacing and typography

### File Structure
```
components/
├── ui/           # Reusable UI components
├── layout/       # Layout components
└── features/     # Feature-specific components

utils/
├── audio/        # Audio-related utilities
├── validation/   # Validation functions
└── helpers/      # General helper functions
```

## 🎵 Audio Development

### Adding New Audio Features
1. Create audio utilities in `utils/audioUtils.ts`
2. Update the WaveformCanvas component if needed
3. Add proper error handling
4. Test across different browsers
5. Update documentation

### Audio File Guidelines
- Supported formats: MP3, WAV
- Recommended bitrate: 128-320 kbps
- File size: Keep under 10MB per file
- Place files in `public/audio/` directory

## 🖼️ Image Guidelines

### Image Optimization
- Use WebP or PNG format
- Compress images for web
- Provide appropriate alt text
- Use responsive images when needed
- Place files in `public/images/` directory

## 📋 Pull Request Process

1. **Create a feature branch** from `develop`
2. **Make your changes** following the guidelines
3. **Write tests** for new functionality
4. **Update documentation** if needed
5. **Run quality checks**:
   ```bash
   npm run lint
   npm run type-check
   npm test
   ```
6. **Commit your changes** using conventional commits
7. **Push to your fork** and create a Pull Request
8. **Fill out the PR template** with details about your changes

### Pull Request Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment details** (OS, browser, Node.js version)
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Screenshots or videos** if applicable
5. **Console errors** or logs

## 💡 Feature Requests

When suggesting features:

1. **Describe the feature** in detail
2. **Explain the use case** and benefits
3. **Provide examples** or mockups if possible
4. **Consider implementation** complexity

## 📚 Documentation

### Updating Documentation
- Keep README.md up to date
- Update CHANGELOG.md for new features
- Add JSDoc comments for functions
- Update component documentation

### Documentation Standards
- Use clear, concise language
- Include code examples
- Provide step-by-step instructions
- Keep information current

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow project conventions

### Communication
- Use clear, professional language
- Be patient with newcomers
- Ask questions when unsure
- Share knowledge and resources

## 🚀 Release Process

### Creating a Release
1. **Update version** in package.json
2. **Update CHANGELOG.md** with new version
3. **Create release branch** from develop
4. **Test thoroughly** on release branch
5. **Merge to master** when ready
6. **Create git tag** for the version
7. **Push tag** to trigger release workflow

### Release Checklist
- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped
- [ ] Release notes prepared
- [ ] Deployment tested

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Email**: Contact haileyhsu94@gmail.com for direct support

## 🙏 Acknowledgments

Thank you for contributing to this project! Your contributions help make it better for everyone.

---

**Happy coding! 🎉** 