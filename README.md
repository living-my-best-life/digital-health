# Digital Healthcare Strategic Dashboard

A comprehensive React-based analytics dashboard for telehealth market intelligence, AI integration trends, and healthcare operations metrics.

![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## Features

- **Market Overview** - Telehealth adoption trends and market projections through 2030
- **Big Tech & AI Tracking** - Timeline of major healthcare AI initiatives (OpenAI, Anthropic, Amazon)
- **AI Deflection Analysis** - Visit deflection metrics by acuity level
- **Operations Metrics** - Operational efficiency and performance tracking
- **Demographics** - Age-based and generational adoption patterns
- **Patient Insights** - Consumer behavior and preference data
- **Reimbursement Parity** - State-by-state telehealth payment parity map (29 states with parity)
- **Geographic Analysis** - Urban, suburban, and rural adoption rates
- **Growth Strategy** - Actionable insights for healthcare organizations

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Interactive charts (Bar, Pie, Line, Area)
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/living-my-best-life/digital-health.git
cd digital-health

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
digital-health/
├── src/
│   ├── TelehealthDashboard.jsx   # Main dashboard component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind imports
├── index.html                     # HTML entry point
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── postcss.config.js              # PostCSS configuration
```

## Data Sources

Dashboard data is based on January 2026 healthcare market research including:
- Telehealth adoption and utilization statistics
- State reimbursement parity legislation
- AI/Big Tech healthcare announcements
- Patient behavior and preference surveys

## License

MIT
