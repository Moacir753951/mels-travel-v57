#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('Installing dependencies...');
execSync('npm install --no-audit --no-fund', { stdio: 'inherit' });

console.log('Running TypeScript compiler with npx...');
execSync('npx tsc -b', { stdio: 'inherit' });

console.log('Building with Vite using npx...');
execSync('npx vite build', { stdio: 'inherit' });
