#!/bin/bash

# Start the React client in the background
cd client
npm run dev &
CLIENT_PID=$!

# Start the Flask server in the background
cd ../server
source venv/Scripts/activate
python app.py &
SERVER_PID=$!

# Wait for both to finish (or Ctrl+C to stop)
wait $CLIENT_PID $SERVER_PID