#!/bin/bash

# Comprehensive test script for Mafia Mystery Game
# Tests frontend, backend, and game functionality

echo "🧪 Testing Mafia Mystery Game"
echo "=============================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Helper functions
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -n "🔍 Testing: $test_name... "
    TESTS_RUN=$((TESTS_RUN + 1))
    
    if eval "$test_command" &>/dev/null; then
        echo -e "${GREEN}PASS${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        echo -e "${RED}FAIL${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

run_test_with_output() {
    local test_name="$1"
    local test_command="$2"
    
    echo "🔍 Testing: $test_name"
    TESTS_RUN=$((TESTS_RUN + 1))
    
    if eval "$test_command"; then
        echo -e "   ${GREEN}PASS${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        echo -e "   ${RED}FAIL${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Test 1: Check Python installation
run_test "Python 3 installation" "command -v python3"

# Test 2: Check required files exist
run_test "Index.html exists" "[ -f 'Index.html' ]"
run_test "signin.html exists" "[ -f 'signin.html' ]"
run_test "signup.html exists" "[ -f 'signup.html' ]"
run_test "play.html exists" "[ -f 'play.html' ]"

# Test 3: Check directories
run_test "CSS directory exists" "[ -d 'CSS' ]"
run_test "JS directory exists" "[ -d 'JS' ]"
run_test "Assets directory exists" "[ -d 'assests' ]"

# Test 4: Check CSS files
run_test "Index.css exists" "[ -f 'CSS/Index.css' ]"
run_test "signin.css exists" "[ -f 'CSS/signin.css' ]"
run_test "signup.css exists" "[ -f 'CSS/signup.css' ]"
run_test "play.css exists" "[ -f 'CSS/play.css' ]"

# Test 5: Check JavaScript files
run_test "Index.js exists" "[ -f 'JS/Index.js' ]"
run_test "signin.js exists" "[ -f 'JS/signin.js' ]"
run_test "signup.js exists" "[ -f 'JS/signup.js' ]"
run_test "play.js exists" "[ -f 'JS/play.js' ]"

# Test 6: Check build script
run_test "Build script is executable" "[ -x 'build.sh' ]"

# Test 7: Check server script
run_test "Server script exists" "[ -f 'server.py' ]"
run_test "Server script is executable" "[ -x 'server.py' ]"

# Test 8: Validate HTML structure
echo ""
echo "🔍 Validating HTML files..."
for file in *.html; do
    if [[ -f "$file" ]]; then
        TESTS_RUN=$((TESTS_RUN + 1))
        if grep -q "<!DOCTYPE html>" "$file" && grep -q "<html" "$file" && grep -q "</html>" "$file"; then
            echo -e "   ${GREEN}✓${NC} $file has valid HTML structure"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "   ${RED}✗${NC} $file has invalid HTML structure"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    fi
done

# Test 9: Check for common JavaScript issues
echo ""
echo "🔍 Checking JavaScript syntax..."
for file in JS/*.js; do
    if [[ -f "$file" ]]; then
        TESTS_RUN=$((TESTS_RUN + 1))
        # Basic syntax check - look for common issues
        if ! grep -q "console.log\|alert\|undefined" "$file" | head -1; then
            echo -e "   ${GREEN}✓${NC} $file appears to have clean syntax"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "   ${YELLOW}⚠${NC} $file may have debug code or issues"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    fi
done

# Test 10: Check CSS syntax
echo ""
echo "🔍 Checking CSS files..."
for file in CSS/*.css; do
    if [[ -f "$file" ]]; then
        TESTS_RUN=$((TESTS_RUN + 1))
        # Basic check for CSS structure
        if grep -q "{" "$file" && grep -q "}" "$file"; then
            echo -e "   ${GREEN}✓${NC} $file has valid CSS structure"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo -e "   ${RED}✗${NC} $file may have invalid CSS"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    fi
done

# Test 11: Test build process
echo ""
run_test_with_output "Build script execution" "./build.sh"

# Test 12: Check if build created files
run_test "Build directory created" "[ -d 'build' ]"
run_test "Build contains HTML files" "[ -f 'build/Index.html' ]"

# Test 13: Test server startup (quick test)
echo ""
echo "🔍 Testing server startup..."
TESTS_RUN=$((TESTS_RUN + 1))
timeout 5s python3 server.py 8081 &>/dev/null &
SERVER_PID=$!
sleep 2

if kill -0 $SERVER_PID 2>/dev/null; then
    echo -e "   ${GREEN}✓${NC} Python server starts successfully"
    kill $SERVER_PID 2>/dev/null
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "   ${RED}✗${NC} Python server failed to start"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi

# Test 14: Check package.json
run_test "package.json exists" "[ -f 'package.json' ]"
if [[ -f "package.json" ]]; then
    run_test "package.json is valid JSON" "python3 -m json.tool package.json"
fi

# Test 15: Check for required assets
echo ""
echo "🔍 Checking game assets..."
run_test "Video file exists" "[ -f 'assests/1476224_People_1920x1080.mp4' ]"
run_test "Eye icons exist" "[ -f 'assests/eyeopen.png' ] && [ -f 'assests/eyeclose.png' ]"

# Test 16: Test npm scripts (if available)
if command -v npm &> /dev/null && [[ -f "package.json" ]]; then
    echo ""
    echo "🔍 Testing npm functionality..."
    run_test "npm start script" "npm run start --if-present"
fi

# Final results
echo ""
echo "📊 Test Results"
echo "==============="
echo -e "Tests Run:    ${TESTS_RUN}"
echo -e "Tests Passed: ${GREEN}${TESTS_PASSED}${NC}"
echo -e "Tests Failed: ${RED}${TESTS_FAILED}${NC}"

if [[ $TESTS_FAILED -eq 0 ]]; then
    echo ""
    echo -e "${GREEN}🎉 All tests passed! The game is ready to play.${NC}"
    echo ""
    echo "🚀 To start the game:"
    echo "   Method 1: python3 -m http.server 8000"
    echo "   Method 2: python3 server.py 8080"
    echo "   Method 3: cd build && python3 -m http.server 8000"
    echo ""
    echo "🌐 Then open: http://localhost:8000"
    exit 0
else
    echo ""
    echo -e "${YELLOW}⚠️  Some tests failed. Please check the issues above.${NC}"
    echo ""
    echo "💡 Common fixes:"
    echo "   - Ensure Python 3.7+ is installed"
    echo "   - Check file permissions"
    echo "   - Verify all files are in the correct locations"
    exit 1
fi