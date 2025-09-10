#!/bin/bash

# Mafia Mystery Game Build Script
# This script builds and prepares the game for deployment

echo "🎮 Building Mafia Mystery Game..."
echo "=================================="

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3.7+"
    exit 1
fi

echo "✅ Python 3 found"

# Check if current directory has the game files
if [[ ! -f "Index.html" ]]; then
    echo "❌ Game files not found. Please run this script from the game directory."
    exit 1
fi

echo "✅ Game files found"

# Validate HTML files
echo "🔍 Validating HTML structure..."
for file in *.html; do
    if [[ -f "$file" ]]; then
        echo "  - Checking $file"
        # Basic HTML validation - check for required tags
        if grep -q "<html" "$file" && grep -q "</html>" "$file"; then
            echo "    ✅ $file structure is valid"
        else
            echo "    ⚠️  $file may have structural issues"
        fi
    fi
done

# Check CSS files
echo "🎨 Checking CSS files..."
if [[ -d "CSS" ]]; then
    css_count=$(find CSS -name "*.css" | wc -l)
    echo "  ✅ Found $css_count CSS files"
else
    echo "  ❌ CSS directory not found"
fi

# Check JavaScript files
echo "🔧 Checking JavaScript files..."
if [[ -d "JS" ]]; then
    js_count=$(find JS -name "*.js" | wc -l)
    echo "  ✅ Found $js_count JavaScript files"
else
    echo "  ❌ JS directory not found"
fi

# Check assets
echo "🖼️  Checking assets..."
if [[ -d "assests" ]]; then
    asset_count=$(find assests -type f | wc -l)
    echo "  ✅ Found $asset_count asset files"
    echo "  ⚠️  Note: Directory name 'assests' should be 'assets' (typo)"
else
    echo "  ❌ Assets directory not found"
fi

# Create build directory
echo "📦 Preparing build..."
BUILD_DIR="build"
if [[ -d "$BUILD_DIR" ]]; then
    rm -rf "$BUILD_DIR"
fi
mkdir -p "$BUILD_DIR"

# Copy files to build directory
echo "📋 Copying files..."
cp *.html "$BUILD_DIR/"
cp -r CSS "$BUILD_DIR/" 2>/dev/null || echo "  ⚠️  CSS directory not copied"
cp -r JS "$BUILD_DIR/" 2>/dev/null || echo "  ⚠️  JS directory not copied"
cp -r assests "$BUILD_DIR/" 2>/dev/null || echo "  ⚠️  Assets directory not copied"
cp README.md "$BUILD_DIR/" 2>/dev/null || echo "  ⚠️  README.md not found"

echo "✅ Build complete!"
echo ""
echo "🚀 To start the game:"
echo "   cd build && python3 -m http.server 8000"
echo ""
echo "🌐 Then open: http://localhost:8000"
echo ""
echo "📁 Build files are in the '$BUILD_DIR' directory"