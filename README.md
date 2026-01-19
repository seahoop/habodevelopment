# Habo Development Website

A professional Next.js website for Habo Development, a private ownership platform focused on quality-driven real estate development.

## Features

- **Landing Page**: Hero section, profile, and core values
- **Projects Page**: Interactive grid of portfolio projects with detailed stats
- **About Page**: Heritage, background, and expertise information
- **Contact Page**: Professional inquiry form with subject dropdown
- **Responsive Design**: Industrial-modern theme with clean, minimalist aesthetics

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
habo-web/
├── components/
│   ├── layout/       # Navbar and Footer
│   ├── projects/     # ProjectCard and ProjectStats
│   └── ui/           # ContactForm
├── pages/            # Next.js pages
├── data/             # Portfolio data
└── styles/           # Global and component styles
```

## Branding Guidelines

- Habo Development is referred to as a "private organization" or "ownership platform"
- No legal entity terms (Inc., LLC, Company) are used
- Footer includes required legal disclaimer on all pages
- "Resident Login" button prominently displayed in top-right of navbar

## Email Configuration

The contact form sends emails to **zhengyuandu2005311@gmail.com**. To enable email sending:

### Option 1: Resend (Recommended - Free tier available)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create `.env.local` file in the root directory:
```
RESEND_API_KEY=re_your_api_key_here
```

### Option 2: SMTP (Gmail)
1. Create a Gmail App Password: https://support.google.com/accounts/answer/185833
2. Create `.env.local` file:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Note:** In development mode without email configuration, form submissions will log to the console. The form will still show success messages to users.

