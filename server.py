#!/usr/bin/env python3
"""
Simple backend server for Mafia Mystery Game
Provides basic API endpoints for game functionality
"""

import http.server
import socketserver
import json
import urllib.parse
import os
from datetime import datetime
import uuid

class MafiaGameHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
        
    def do_POST(self):
        """Handle POST requests for game API"""
        if self.path == '/api/auth/login':
            self.handle_login()
        elif self.path == '/api/auth/register':
            self.handle_register()
        elif self.path == '/api/game/create':
            self.handle_create_game()
        elif self.path == '/api/game/join':
            self.handle_join_game()
        else:
            self.send_error(404, "API endpoint not found")
    
    def do_GET(self):
        """Handle GET requests"""
        if self.path.startswith('/api/'):
            if self.path == '/api/game/rooms':
                self.handle_get_rooms()
            elif self.path == '/api/game/stats':
                self.handle_get_stats()
            else:
                self.send_error(404, "API endpoint not found")
        else:
            # Serve static files
            super().do_GET()
    
    def handle_login(self):
        """Handle user login"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            email = data.get('email', '')
            password = data.get('password', '')
            
            # Simple authentication (in real app, use proper auth)
            if email == 'admin@admin.com' and password == 'Admin@123':
                response = {
                    'success': True,
                    'user': {
                        'id': 'user_001',
                        'email': email,
                        'name': 'Game Master',
                        'role': 'admin'
                    },
                    'token': str(uuid.uuid4())
                }
            else:
                response = {
                    'success': False,
                    'message': 'Invalid credentials'
                }
            
            self.send_json_response(response)
            
        except Exception as e:
            self.send_error(400, f"Bad request: {str(e)}")
    
    def handle_register(self):
        """Handle user registration"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            
            response = {
                'success': True,
                'message': 'Registration successful',
                'user': {
                    'id': str(uuid.uuid4()),
                    'email': data.get('email'),
                    'name': data.get('name'),
                    'created_at': datetime.now().isoformat()
                }
            }
            
            self.send_json_response(response)
            
        except Exception as e:
            self.send_error(400, f"Bad request: {str(e)}")
    
    def handle_create_game(self):
        """Handle game room creation"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            
            room_code = f"ROOM{uuid.uuid4().hex[:6].upper()}"
            
            response = {
                'success': True,
                'room': {
                    'code': room_code,
                    'host': data.get('host_id', 'unknown'),
                    'max_players': data.get('max_players', 10),
                    'current_players': 1,
                    'status': 'waiting',
                    'created_at': datetime.now().isoformat()
                }
            }
            
            self.send_json_response(response)
            
        except Exception as e:
            self.send_error(400, f"Bad request: {str(e)}")
    
    def handle_join_game(self):
        """Handle joining a game room"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            room_code = data.get('room_code', '')
            
            if room_code.startswith('ROOM'):
                response = {
                    'success': True,
                    'message': f'Joined room {room_code}',
                    'room': {
                        'code': room_code,
                        'current_players': 3,
                        'max_players': 10,
                        'status': 'waiting'
                    }
                }
            else:
                response = {
                    'success': False,
                    'message': 'Invalid room code'
                }
            
            self.send_json_response(response)
            
        except Exception as e:
            self.send_error(400, f"Bad request: {str(e)}")
    
    def handle_get_rooms(self):
        """Get list of available game rooms"""
        response = {
            'success': True,
            'rooms': [
                {
                    'code': 'ROOMABC123',
                    'players': 4,
                    'max_players': 10,
                    'status': 'waiting'
                },
                {
                    'code': 'ROOMDEF456',
                    'players': 7,
                    'max_players': 12,
                    'status': 'in_progress'
                }
            ]
        }
        self.send_json_response(response)
    
    def handle_get_stats(self):
        """Get game statistics"""
        response = {
            'success': True,
            'stats': {
                'total_players': 12847,
                'active_games': 23,
                'total_games_played': 156782,
                'online_players': 1247
            }
        }
        self.send_json_response(response)
    
    def send_json_response(self, data):
        """Send JSON response"""
        response = json.dumps(data).encode('utf-8')
        
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(response)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        self.wfile.write(response)
    
    def do_OPTIONS(self):
        """Handle preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

def run_server(port=8080):
    """Run the Mafia game server"""
    with socketserver.TCPServer(("", port), MafiaGameHandler) as httpd:
        print(f"🎮 Mafia Mystery Game Server")
        print(f"🌐 Server running at http://localhost:{port}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"🔧 API endpoints available:")
        print(f"   POST /api/auth/login")
        print(f"   POST /api/auth/register") 
        print(f"   POST /api/game/create")
        print(f"   POST /api/game/join")
        print(f"   GET  /api/game/rooms")
        print(f"   GET  /api/game/stats")
        print(f"\n🚀 Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n🛑 Server stopped")

if __name__ == "__main__":
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    run_server(port)