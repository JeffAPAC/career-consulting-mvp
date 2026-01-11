# CareerPilot

A modern career mentorship platform that connects professionals with experienced mentors across various industries. Built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- **Mentor Discovery** - Browse and search for mentors by expertise, company, or industry
- **AI Interview Coach** - Practice mock interviews with AI-powered coaching at `/coach`
- **Premium Dark Theme** - Sleek dark mode design with Signal Orange (#FF7F50) accent
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Components:** shadcn/ui
- **Fonts:** Inter (headings), DM Sans (body)

## Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npx shadcn@latest init

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Project Structure

```
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout with fonts
│   ├── globals.css       # Global styles & design tokens
│   └── coach/            # AI Mock Interview feature
├── components/
│   ├── navbar.tsx        # Sticky navigation bar
│   ├── hero-section.tsx  # Hero with search & CTAs
│   ├── trusted-companies.tsx
│   ├── mentor-grid.tsx   # Mentor listing section
│   └── mentor-card.tsx   # Individual mentor card
└── public/
    └── *.png             # Mentor avatar images
```

## Routes

| Route    | Description                     |
| -------- | ------------------------------- |
| `/`      | Landing page with mentor search |
| `/coach` | AI Mock Interview Coach         |

## Design System

- **Background:** #111111
- **Card Background:** #1A1A1A
- **Accent Color:** Signal Orange (#FF7F50)
- **Border Radius:** 12px (cards), 8px (buttons)

## License

MIT
