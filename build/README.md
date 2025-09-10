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
- pip package manager
- Git (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Akshit2004/MafiaGame.git
   cd mafia-mystery


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