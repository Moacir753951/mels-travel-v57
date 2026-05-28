#!/bin/bash
set -e
npm ci --ignore-scripts 2>/dev/null || npm install
./node_modules/.bin/tsc -b
./node_modules/.bin/vite build
