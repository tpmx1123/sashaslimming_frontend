# SASHA LUXE Website

A React.js website for SASHA LUXE Dermatology and Cosmetic Surgery Center, built with Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env` file in the `frontend` directory
   - For development, add:
   ```env
   VITE_API_BASE_URL=http://localhost:8081/api
   ```
   - For production, use:
   ```env
   VITE_API_BASE_URL=https://sashaslimming.com/api
   ```
   - Note: If not set, defaults to production URL `https://sashaslimming.com/api`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Environment Variables

All services use environment variables for API configuration. The following variable is required:

- `VITE_API_BASE_URL`: The base URL for the backend API (defaults to `http://localhost:8081/api` if not set)

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the application.

## Build for Production

```bash
npm run build
```

## Features

- Responsive navbar with dropdown menus
- Tailwind CSS for styling
- Modern React with Vite

