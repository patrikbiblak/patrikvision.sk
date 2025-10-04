# PatrikVision Website

A modern, responsive website built with React showcasing web development services.

## Features

- 🌐 Multi-language support (English, Slovak, Hungarian)
- 📱 Fully responsive design
- 🗺️ Interactive Google Maps integration
- 📧 Contact form with EmailJS integration
- 🍪 GDPR-compliant cookie management
- ⚡ Fast loading with optimized assets

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd patrikvision.sk
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API keys and configuration:

```bash
cp .env.example .env
```

Edit the `.env` file with your actual values:

```env
# Google Maps API Key
REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Getting API Keys

#### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Go to "Credentials" and create an API key
5. Restrict the key to your domain for security

#### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── common/         # Common UI components
│   ├── features/       # Feature-specific components
│   └── layout/         # Layout components
├── pages/              # Page components
├── i18n/               # Internationalization
├── styles/             # Global styles
└── hooks/              # Custom React hooks
```

## Technologies Used

- React 18
- React Router
- React Helmet (SEO)
- i18next (Internationalization)
- EmailJS (Contact form)
- Google Maps API
- Lucide React (Icons)
- CSS3 with modern features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.
