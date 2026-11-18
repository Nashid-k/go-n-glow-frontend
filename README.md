# Go N Glow — Salon Booking Frontend

The Go N Glow frontend is a Next.js application for a salon-discovery and appointment-booking product. It includes account flows, OTP and password-recovery screens, salon discovery and a shared API client for the companion backend.

## Current stack

- Next.js 16.1
- React 19
- TypeScript
- Tailwind CSS 4
- Axios
- React Hook Form and Zod
- date-fns and Lucide React

## Application areas

- Signup and sign-in
- OTP verification
- Forgot-password and change-password flows
- Salon discovery and booking-oriented UI
- Shared authentication context and API client

## Run locally

```bash
git clone https://github.com/Nashid-k/go-n-glow-frontend.git
cd go-n-glow-frontend
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API, including the `/api` prefix |

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

This variable is public and is embedded in the browser bundle. Never put private credentials in a `NEXT_PUBLIC_*` variable.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Related repository

[Go N Glow backend](https://github.com/Nashid-k/go-n-glow-backend) contains the Express and TypeScript API for authentication, salons, services and bookings.
