# Go N Glow - Salon Booking Platform (Frontend)

React/Next.js frontend for the Go N Glow salon booking platform.

## Features

- ✅ User authentication (Sign up, Login, Forgot Password)
- ✅ Salon discovery with search and filters
- ✅ Detailed salon pages with services
- ✅ Real-time booking system
- ✅ Booking history and management
- ✅ Responsive design (desktop and mobile)
- ✅ Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (React 18+)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form (ready to integrate)
- **Icons**: Lucide React

## Pages

- `/` - Landing page with hero and features
- `/salons` - Salon listing with search and filters
- `/salons/[id]` - Salon detail page with booking
- `/login` - User login
- `/signup` - User registration
- `/forgot-password` - Password reset with OTP
- `/bookings` - User booking history
- `/admin` - Admin dashboard (to be implemented)

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Running backend API (see backend README)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
├── login/               # Login page
├── signup/              # Signup page
├── forgot-password/     # Password reset
├── salons/              
│   ├── page.tsx         # Salon listing
│   └── [id]/page.tsx    # Salon detail
└── bookings/page.tsx    # Booking history

components/
└── Navbar.tsx           # Navigation component

lib/
├── api-client.ts        # Axios instance with interceptors
└── auth-context.tsx     # Authentication context provider

types/
└── index.ts             # TypeScript interfaces
```

## Key Features

### Authentication
- JWT-based authentication with localStorage
- Automatic token refresh on API calls
- Protected routes redirect to login
- Auth context provides user state globally

### Salon Discovery
- Search salons by name
- Filter by city/location
- View salon ratings and reviews
- Browse services and pricing

### Booking Flow
1. Select salon from listing
2. Choose services on salon detail page
3. Pick date and time slot
4. Confirm booking
5. View in booking history

### Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- Responsive grid layouts
- Touch-friendly UI elements

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000/api` |

## Development Notes

- API client automatically adds JWT token to requests
- 401 responses trigger automatic logout
- Image placeholders used when salon images not provided
- Mock OTP displayed in UI for testing forgot password flow

## Styling Guidelines

- Primary color: Pink (#e91e63)
- Secondary color: Purple (#9c27b0)
- Use Tailwind utility classes
- Maintain consistent spacing and shadows
- Follow mobile-first responsive design

## Testing

### Manual Testing Checklist
- [ ] Sign up new user
- [ ] Login with credentials
- [ ] Search and filter salons
- [ ] View salon details
- [ ] Create a booking
- [ ] View booking history
- [ ] Cancel a booking
- [ ] Forgot password flow

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Build command: `npm run build`
- Start command: `npm start`
- Environment variables must be set

## Future Enhancements

- [ ] Admin dashboard for salon/service management
- [ ] Reviews and ratings system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Profile management
- [ ] Advanced filters (price range, services)

## Author

FlipmaxxGlobal LLP Full Stack Developer Assignment
