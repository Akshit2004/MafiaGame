# Mafia Mystery Game - Deployment Guide

## Quick Start

### Prerequisites
- Python 3.7 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for CDN resources

### Running the Game

#### Method 1: Using Build Script (Recommended)
```bash
# Make the build script executable
chmod +x build.sh

# Run the build script
./build.sh

# Start the game server
cd build && python3 -m http.server 8000
```

#### Method 2: Direct Server Start
```bash
# Start HTTP server directly
python3 -m http.server 8000

# Or specify a different port
python3 -m http.server 3000
```

#### Method 3: Using Node.js (if available)
```bash
# Install dependencies
npm install

# Start development server
npm start

# Or start production server
npm run serve-production
```

### Accessing the Game
1. Open your web browser
2. Navigate to `http://localhost:8000`
3. Click on `Index.html` to start the game

### Game URLs
- **Main Page**: `http://localhost:8000/Index.html`
- **Sign Up**: `http://localhost:8000/signup.html`
- **Sign In**: `http://localhost:8000/signin.html`
- **Game Interface**: `http://localhost:8000/play.html`

## Game Features

### ✅ Implemented Features
- **Beautiful Landing Page**: Professional game homepage with video background
- **User Authentication**: Sign up and sign in functionality with form validation
- **Game Interface**: Complete player dashboard with stats and game options
- **Responsive Design**: Works on desktop and mobile devices
- **Role Information**: Detailed role descriptions and game mechanics
- **Modern UI/UX**: Dark theme with professional styling

### 🎮 Game Options
- **Create Game**: Host your own game room
- **Join Game**: Enter a game code to join existing games
- **Quick Play**: Join random games instantly

### 👥 Game Roles
**Town Roles:**
- Sheriff (Investigative)
- Doctor (Protective)
- Vigilante (Killing)
- Mayor (Support)
- Investigator (Investigative)
- Medium (Support)
- Lookout (Investigative)

**Mafia Roles:**
- Godfather (Leader)
- Framer (Deception)
- Consigliere (Investigative)
- Mafioso (Killing)
- Blackmailer (Disruptive)
- Janitor (Deception)

**Neutral Roles:**
- Jester (Chaos)
- Executioner (Manipulation)
- Serial Killer (Killing)
- Arsonist (Killing)
- Witch (Control)
- Survivor (Survival)

## Testing

### Frontend Testing
```bash
# Run all tests
npm test

# Run linting
npm run lint

# Run validation
npm run validate
```

### Manual Testing Checklist
- [ ] Landing page loads correctly
- [ ] Navigation links work
- [ ] Sign up form validation works
- [ ] Sign in form works (use admin@admin.com / Admin@123)
- [ ] Game interface loads with proper styling
- [ ] Role tabs switch correctly
- [ ] Video background plays
- [ ] Responsive design works on mobile

## Deployment

### For Production
```bash
# Build for production
npm run build

# Deploy files from build directory
npm run deploy
```

### Static Hosting
The game can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

Simply upload the files to your hosting service and ensure the server can serve HTML, CSS, JS, and media files.

### Server Requirements
- Static file serving capability
- Support for HTML5 video
- HTTPS recommended for production

## Development

### File Structure
```
MafiaGame/
├── Index.html          # Main landing page
├── signin.html         # User sign in page
├── signup.html         # User registration page
├── play.html          # Main game interface
├── CSS/               # Stylesheets
│   ├── Index.css
│   ├── signin.css
│   ├── signup.css
│   └── play.css
├── JS/                # JavaScript files
│   ├── Index.js
│   ├── signin.js
│   ├── signup.js
│   └── play.js
├── assests/           # Media assets
│   ├── 1476224_People_1920x1080.mp4
│   ├── eyeopen.png
│   └── eyeclose.png
├── package.json       # Project configuration
├── build.sh          # Build script
└── README.md         # This file
```

### Adding New Features
1. Create new HTML/CSS/JS files as needed
2. Update navigation links in existing files
3. Test locally using the development server
4. Run build script before deployment

## Troubleshooting

### Common Issues

**Game doesn't load:**
- Check that Python 3 is installed
- Ensure you're in the correct directory
- Verify the port isn't already in use

**Video doesn't play:**
- Some browsers block autoplay; click the play button if it appears
- Ensure video file is in the correct location (`assests/` directory)

**Styles not loading:**
- Check browser console for 404 errors
- Verify CSS file paths in HTML files
- Clear browser cache

**JavaScript errors:**
- Check browser console for error messages
- Ensure all JS files are properly linked
- Verify file paths are correct

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
MIT License - see the LICENSE file for details