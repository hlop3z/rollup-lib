#!/bin/bash

# Create Logs Dir.
mkdir -p logs

# ES-Lint
python watcher.py > logs/eslint.log 2>&1 &

# Dev Server
npm run dev