#!/bin/bash
set -e
npm install
npx tsc -b
npx vite build
