#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Running TypeScript compiler...');
execSync('./node_modules/.bin/tsc -b', { stdio: 'inherit' });

console.log('Building with Vite...');
execSync('./node_modules/.bin/vite build', { stdio: 'inherit' });
