# WOW Occupational Therapy

A modern, responsive website for WOW Occupational Therapy - empowering children with ADHD through innovative occupational therapy programs.

## About

This website provides information about WOW Occupational Therapy's services, team, and resources for families of children with ADHD. Features include:

- Program information and details
- Team member profiles
- Consultation booking
- Resource downloads
- Contact forms
- Interactive location map

## Technologies Used

This project is built with:

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **AWS Amplify** - Production hosting with SPA routing (rules updated to /*)
- **AWS Serverless** - Backend deployment
- **shadcn/ui** - Component library
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **EmailJS** - Contact form email delivery
- **Leaflet** - Interactive maps

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd WOW2
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Development

### Project Structure

```
src/
├── components/     # Reusable components
│   ├── layout/    # Header, Footer, Navigation
│   └── ui/        # shadcn/ui components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Images and static files
```

### Code Style

- TypeScript for type safety
- React functional components with hooks
- Tailwind CSS for styling
- Path aliases (`@/*` → `./src/*`)

## Deployment

Build the project for production:

```sh
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Contributing

When making changes:

1. Run linting: `npm run lint`
2. Test locally with `npm run dev`
3. Build to verify: `npm run build`
4. Commit your changes

## License

All rights reserved.