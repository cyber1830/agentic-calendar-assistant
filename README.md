# Meeting Assistant

Meeting Assistant is a full-stack conversational AI calendar app. Users sign in, connect Google Calendar, and manage meetings through natural language.

## Features

- List upcoming events and today's agenda
- Check availability with Google Calendar FreeBusy
- Create events with optional Google Meet links and attendees
- Reschedule and cancel events
- Stream agent responses in real time
- Persist user-specific conversation threads and preferences
- Expose calendar tools through MCP

## Architecture

- Frontend: Next.js, React, TypeScript, Tailwind, Descope
- Backend: Express, TypeScript, Mastra agent framework
- Data: PostgreSQL for users/connections and LibSQL for agent memory
- Integrations: Google Calendar and Descope outbound connections

## Local setup

1. Start PostgreSQL with Docker Compose.
2. Install dependencies in both backend and frontend.
3. Create environment files from the variables used in the backend configuration.
4. Run the database migration.
5. Start the backend and frontend development servers.

The backend health endpoint is /health. The frontend runs on port 3000 and the backend defaults to port 4000.

Do not commit API keys, Descope management keys, database credentials, or OAuth tokens. For production, replace the local database credentials and configure HTTPS, rate limiting, structured logging, and a managed memory store.
