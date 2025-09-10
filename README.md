# 🕵️ Mafia Mystery

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/)
[![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-orange.svg)](https://developer.mozilla.org/en-US/docs/Web)

A thrilling web-based social deduction game inspired by Werewolf/Mafia, where players take on secret roles and try to outsmart each other in a battle of wits and deception.

## 📋 Table of Contents
- [About the Game](#about-the-game)
- [Features](#features)
- [Game Roles](#game-roles)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Play](#how-to-play)
- [Gameplay Phases](#gameplay-phases)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 🎮 About the Game

Mafia Mystery is an interactive web game where players are divided into two main factions: the Mafia and the Villagers. In this game of social deduction:

- Each player is secretly assigned a role with unique abilities
- The game alternates between day and night phases
- During the night, the Mafia secretly choose a Villager to eliminate
- During the day, all players discuss and vote to eliminate a suspected Mafia member
- Special roles can use their abilities to help their team

Can you survive the mystery and emerge victorious?

## 🔍 Features

- **🕵️ Dynamic Role System**: Unique roles with special abilities to create varied gameplay experiences
- **🗳️ Interactive Voting System**: Real-time discussion and voting to eliminate suspected Mafia members
- **🌙 Strategic Day/Night Cycle**: Different actions available during each phase
- **💬 In-game Chat**: Communicate with other players during discussions
- **👥 Private Team Chat**: Secret communication for Mafia members
- **🎨 Responsive Design**: Play on desktop or mobile devices
- **🔒 Secure Room System**: Private game rooms with invite codes

## 👤 Game Roles

| Role | Team | Special Ability |
|------|------|-----------------|
| Villager | Village | Votes during the day |
| Mafia | Mafia | Eliminates one player each night |
| Detective | Village | Can investigate one player's role each night |
| Doctor | Village | Can protect one player from elimination each night |
| Sheriff | Village | Can check if a player is suspicious |
| Jester | Neutral | Wins if voted out during the day |

## 🛠️ Technologies Used

**Frontend:**
- HTML5, CSS3, JavaScript
- Responsive design with Flexbox/Grid
- WebSockets for real-time communication

**Backend:**
- Python 3.7+
- Flask web framework
- SQLite/PostgreSQL database
- Socket.IO for real-time events

## 📦 Setup Instructions

### Prerequisites
- Python 3.7 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for CDN resources (Font Awesome, Google Fonts)

### Quick Start

#### Method 1: Automated Build (Recommended)
```bash
# Clone the repository
git clone https://github.com/Akshit2004/MafiaGame.git
cd MafiaGame

# Run the automated build and test
chmod +x build.sh test.sh
./build.sh

# Start the game
cd build && python3 -m http.server 8000
```

#### Method 2: Direct Start
```bash
# Clone and start directly
git clone https://github.com/Akshit2004/MafiaGame.git
cd MafiaGame

# Start simple HTTP server
python3 -m http.server 8000
```

#### Method 3: Enhanced Backend
```bash
# Start with enhanced backend API
python3 server.py 8080
```

#### Method 4: Using npm
```bash
# If you have Node.js installed
npm start
```

### Accessing the Game
1. Open your web browser
2. Navigate to `http://localhost:8000`
3. Click on `Index.html` or go directly to `http://localhost:8000/Index.html`

### Demo Credentials
For testing the login functionality:
- **Email**: `admin@admin.com`
- **Password**: `Admin@123`

## 🎮 Game Features

### ✅ Fully Implemented Features
- **🏠 Beautiful Landing Page**: Professional homepage with video background and smooth animations
- **👤 User Authentication**: Complete sign-up and sign-in system with form validation
- **🎯 Game Dashboard**: Comprehensive player interface with stats, announcements, and game options
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI/UX**: Dark theme with professional styling and smooth transitions
- **🔧 Build System**: Automated build, test, and deployment scripts
- **🌐 Backend API**: Python server with game endpoints (optional)

### 🎮 Game Components

#### Authentication System
- **Sign Up**: Email validation, password strength requirements, toggle visibility
- **Sign In**: Secure login with demo credentials
- **Form Validation**: Real-time validation with visual feedback

#### Game Interface
- **Player Stats**: XP progression, rank, wins, rating points
- **Game Options**: Create Game, Join Game, Quick Play
- **Role Information**: Detailed descriptions of all game roles
- **Announcements**: Game updates and community messages

#### Backend API (server.py)
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `POST /api/game/create` - Create game room
- `POST /api/game/join` - Join game room
- `GET /api/game/rooms` - List available rooms
- `GET /api/game/stats` - Game statistics

## 🧪 Testing

### Automated Testing
```bash
# Run comprehensive test suite
./test.sh
```

### Manual Testing Checklist
- [ ] Landing page loads with video background ✅
- [ ] Navigation works smoothly ✅
- [ ] Sign up form validation works ✅
- [ ] Sign in works with demo credentials ✅
- [ ] Game dashboard displays correctly ✅
- [ ] Role tabs switch properly ✅
- [ ] Responsive design works on mobile ✅
- [ ] All assets load correctly ✅

## 🚀 Deployment

### Build for Production
```bash
# Create production build
./build.sh

# Deploy from build directory
cd build
python3 -m http.server 3000
```

### Static Hosting
The game is ready for deployment to:
- **GitHub Pages**: Upload to gh-pages branch
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: Upload static files

### File Structure
```
MafiaGame/
├── Index.html              # 🏠 Main landing page
├── signin.html             # 🔑 User sign in
├── signup.html             # 📝 User registration  
├── play.html               # 🎮 Game interface
├── CSS/                    # 🎨 Stylesheets
│   ├── Index.css
│   ├── signin.css
│   ├── signup.css
│   └── play.css
├── JS/                     # ⚡ JavaScript
│   ├── Index.js
│   ├── signin.js
│   ├── signup.js
│   └── play.js
├── assests/                # 📁 Media files
│   ├── 1476224_People_1920x1080.mp4
│   ├── eyeopen.png
│   └── eyeclose.png
├── build/                  # 📦 Production build
├── package.json            # 📋 Project config
├── server.py              # 🖥️ Python backend
├── build.sh               # 🔨 Build script
├── test.sh                # 🧪 Test script
└── DEPLOYMENT.md          # 📖 Deployment guide
```


🎯 How to Play

1. Join a Game: Enter a game room with friends or play with random players
2. Receive a Role: Each player is secretly assigned a role with unique abilities
3. Play Through Phases: Alternate between night and day phases
4. Use Your Abilities: Special roles have actions they can perform
5. Discuss and Vote: During the day, try to identify the Mafia
6. Win the Game: Achieve your team's victory condition

 Win Conditions

1. Mafia Wins: When Mafia members equal or outnumber Villagers
2. Villagers Win: When all Mafia members are eliminated
3. Special Roles: Some roles may have unique win conditions


🤝 Contributing
Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: git checkout -b new-feature
3. Commit your changes: git commit -am 'Add new feature'
4. Push to the branch: git push origin new-feature
5. Submit a pull request