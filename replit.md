# Photography Portfolio Web Application

## Overview

This is a full-stack web application built for a professional photographer's portfolio website. The application features a modern, responsive design with a React frontend and Express.js backend, utilizing PostgreSQL for data persistence through Drizzle ORM. The site showcases photography services, portfolio galleries, pricing packages, and includes multilingual support for Portuguese and English.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: react-i18next for Portuguese/English support
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless driver
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Session Store**: PostgreSQL-backed session management
- **Migration Management**: Drizzle Kit for schema migrations

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Validation**: Zod integration for runtime type checking
- **Type Safety**: Full TypeScript integration with inferred types

### UI Components
- **Component Library**: Comprehensive shadcn/ui implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Dark Mode**: CSS variables-based theming system

### Photography Features
- **Portfolio Gallery**: Image lightbox with keyboard navigation
- **Service Showcase**: Animated service cards with icons
- **Pricing Packages**: Interactive pricing tiers
- **Contact Integration**: WhatsApp integration for direct client communication
- **Philosophy Section**: Brand storytelling with animated reveals

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **State Management**: TanStack Query manages API calls and caching
3. **API Layer**: Express routes handle business logic
4. **Data Access**: Storage interface abstracts database operations
5. **Response**: JSON data returned to frontend for rendering

The application uses a clean separation between presentation (React), business logic (Express), and data persistence (Drizzle/PostgreSQL).

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with PostCSS processing

### Database & Backend
- **Database**: Neon PostgreSQL serverless
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for session persistence

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Development**: Replit-specific plugins for error handling and debugging

### Third-Party Integrations
- **WhatsApp API**: Direct messaging integration
- **Image Hosting**: Unsplash for demo portfolio images
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for enhanced user experience

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon PostgreSQL with connection pooling
- **Environment Variables**: DATABASE_URL for database connection
- **Error Handling**: Runtime error overlay for development debugging

### Production Build
- **Frontend**: Static assets compiled with Vite
- **Backend**: ESBuild compilation to single bundle
- **Database**: Drizzle migrations for schema management
- **Deployment**: Node.js server with static file serving

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles server code with external dependencies
3. **Database Setup**: Drizzle push for schema synchronization
4. **Production Start**: Single Node.js process serving both API and static files

The application is designed for easy deployment to platforms like Replit, with automatic database provisioning and environment configuration.

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```