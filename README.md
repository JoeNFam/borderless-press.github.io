# NewsFlow Live

A modern news website built with HTML5 and Tailwind CSS, featuring live dashboard, breaking news center, personalized feeds, and comprehensive news exploration tools.

## 🚀 Features

- **Live Dashboard** - Real-time news updates and analytics
- **Breaking News Center** - Instant breaking news alerts and coverage
- **Archive Search** - Search through historical news articles
- **Personalized Feed** - Customized news feed based on user preferences
- **Topic Explorer** - Explore news by categories and topics
- **Story Deep Dive** - In-depth analysis and related story connections
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Tailwind CSS** - Modern utility-first CSS framework

## 📋 Prerequisites

- Node.js (v12.x or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/newsflow-live.git
cd newsflow-live
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `index.html` or serve the files using a local server.

## 📁 Project Structure

```
newsflow-live/
├── css/
│   ├── tailwind.css      # Tailwind source file with custom utilities
│   └── main.css          # Compiled CSS (generated)
├── pages/
│   ├── live_dashboard_homepage.html    # Main dashboard page
│   ├── breaking_news_center.html      # Breaking news section
│   ├── archive_search.html            # News archive search
│   ├── personalized_feed.html         # User personalized feed
│   ├── topic_explorer.html            # Topic exploration page
│   └── story_deep_dive.html           # Deep dive story analysis
├── public/
│   ├── favicon.ico       # Website favicon
│   ├── manifest.json     # PWA manifest
│   └── dhws-data-injector.js  # Data injection script
├── index.html            # Main entry point with redirect
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # Project documentation
```

## 🎨 Pages Overview

- **Homepage (index.html)**: Landing page with automatic redirect to dashboard
- **Live Dashboard**: Real-time news monitoring and analytics
- **Breaking News Center**: Latest breaking news with live updates
- **Archive Search**: Search functionality for historical news
- **Personalized Feed**: Customized news based on user preferences
- **Topic Explorer**: Browse news by categories and topics
- **Story Deep Dive**: Detailed story analysis with related content

## 🧩 Customization

To customize the Tailwind configuration, edit the `tailwind.config.js` file. The project includes several Tailwind plugins:

- @tailwindcss/forms - Form styling utilities
- @tailwindcss/typography - Typography utilities
- @tailwindcss/aspect-ratio - Aspect ratio utilities
- tailwindcss-animate - Animation utilities
- tailwindcss-elevation - Material Design elevation
- tailwindcss-fluid-type - Responsive typography

## 📦 Build for Production

Build the CSS for production:

```bash
npm run build:css
# or
yarn build:css
```

## 🚀 Deployment

1. Build the production CSS:
```bash
npm run build:css
```

2. Deploy the files to your web server or hosting platform
3. Ensure all HTML pages are accessible via proper routing

## 📱 Responsive Design

The website is built with responsive design using Tailwind CSS breakpoints:

- `sm`: 640px and up (Mobile landscape)
- `md`: 768px and up (Tablet)
- `lg`: 1024px and up (Desktop)
- `xl`: 1280px and up (Large desktop)
- `2xl`: 1536px and up (Extra large desktop)

## 🔧 Development Scripts

- `npm run dev` - Start development with CSS watching
- `npm run build:css` - Build CSS for production
- `npm run watch:css` - Watch CSS changes during development

## 🌟 Features in Detail

### Live Dashboard
- Real-time news feed updates
- Analytics and trending topics
- Quick navigation to all sections

### Breaking News Center
- Instant notifications for breaking news
- Live coverage updates
- Priority news alerts

### Archive Search
- Full-text search capabilities
- Date range filtering
- Category-based search

### Personalized Feed
- User preference-based content
- Reading history integration
- Customizable news sources

### Topic Explorer
- Category-wise news browsing
- Tag-based exploration
- Related topic suggestions

### Story Deep Dive
- Comprehensive story analysis
- Related articles and context
- Timeline view for developing stories

## 🙏 Acknowledgments

- Built with modern web technologies
- Powered by HTML5 and Tailwind CSS
- Responsive design for optimal user experience

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for delivering the best news experience