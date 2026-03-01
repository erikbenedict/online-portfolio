# Erik Benedict - Portfolio Website

Portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Azure Static Web Apps

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.local.example .env.local
```

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
portfolio/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── work/              # Projects pages
│   ├── skills/            # Skills page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/
│   ├── layout/            # Layout components
│   ├── ui/                # Reusable UI components
│   └── sections/          # Page sections
├── lib/                   # Utilities and data
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Deployment

Built for Azure Static Web Apps. The site uses:
- Static generation for pages
- API routes for contact form
- Optimized images and assets

## License

MIT License - see LICENSE file for details
