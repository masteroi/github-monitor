# GitHub monitor

# Project Overview

This project consists of a full-stack application with separate frontend and backend services, along with a containerized MongoDB database.

## Project Structure

- client/ -> Frontend React application
- server/ -> Backend Node.js server
- README.md -> Project documentation

## Backend (Server)

The server is built with Node.js and Express, providing REST API endpoints and has 2 main routes for retrieve the notifications and another one to get all the activities.

### Setup and Running

1. Navigate to server directory:

```bash
cd server
npm run setup
npm start
```

- another provided commands:

```
npm run setup - Install dependencies and start MongoDB
npm start - Start the server
```

## Frontend (Client)

React-based frontend application for showing the logs activities.

### Setup and Running

1. Navigate to client directory:

```bash
cd client
npm install
npm run start
```

## Database

MongoDB database running remote on Atlas.

## Environment Variables

Create `.env` files in both client and server directories:

# Server .env

Holds the port, db uri string and github webhook secret.
