# Fugeniz Portfolio Website

A modern, dynamic portfolio website for Fugeniz - "So real, you'll forget Artificial." Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Futuristic dark theme with gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive**: Animated world map, testimonial slider, and dynamic components
- **Performance**: Optimized with Vite and lazy loading
- **SEO Ready**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Counters**: React CountUp
- **Sliders**: React Slick

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd freelance-UIUX-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WorldMap.jsx
│   └── TestimonialSlider.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyUs.jsx
│   ├── CaseStudies.jsx
│   └── Contact.jsx
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue gradient (#0ea5e9)
- **Secondary**: Purple gradient (#d946ef)
- **Accent**: Green gradient (#22c55e)
- **Dark**: Slate grays (#0f172a to #64748b)

### Fonts
- **Sans**: Inter (body text)
- **Display**: Poppins (headings)
- **Mono**: JetBrains Mono (code)

## 📸 Asset Replacement Guide

### Required Assets to Replace

| Placeholder Path | What to Replace With | File Type | Purpose |
|------------------|---------------------|-----------|---------|
| `/avatars/sarah-johnson.jpg` | Sarah Johnson's photo | JPG/PNG | Testimonial avatar |
| `/avatars/michael-chen.jpg` | Michael Chen's photo | JPG/PNG | Testimonial avatar |
| `/avatars/emma-rodriguez.jpg` | Emma Rodriguez's photo | JPG/PNG | Testimonial avatar |
| `/avatars/david-thompson.jpg` | David Thompson's photo | JPG/PNG | Testimonial avatar |
| `/logos/techflow.png` | TechFlow Solutions logo | PNG/SVG | Client logo |
| `/logos/globaltrade.png` | Global Trade Corp logo | PNG/SVG | Client logo |
| `/logos/retailinnovations.png` | Retail Innovations logo | PNG/SVG | Client logo |
| `/logos/maritimesolutions.png` | Maritime Solutions logo | PNG/SVG | Client logo |
| `/logos/datadynamics.png` | Data Dynamics logo | PNG/SVG | Client logo |
| `/logos/cloudsystems.png` | Cloud Systems logo | PNG/SVG | Client logo |
| `/case-studies/trade-portal-dashboard.jpg` | Trade portal dashboard mockup | JPG/PNG | Case study visualization |
| `/case-studies/inventory-dashboard.jpg` | Inventory dashboard mockup | JPG/PNG | Case study visualization |
| `/case-studies/analytics-dashboard.jpg` | Analytics dashboard mockup | JPG/PNG | Case study visualization |
| `/og-image.jpg` | Open Graph image | JPG/PNG | Social media sharing |
| `/vite.svg` | Fugeniz favicon | SVG | Browser tab icon |

### Optional Assets

| Placeholder Path | What to Replace With | File Type | Purpose |
|------------------|---------------------|-----------|---------|
| `/hero-bg.jpg` | Hero background image | JPG/PNG | Home page background |
| `/about-bg.jpg` | About page background | JPG/PNG | About page background |
| `/services-bg.jpg` | Services page background | JPG/PNG | Services page background |
| `/team-photos/` | Team member photos | JPG/PNG | About page team section |

### Asset Specifications

#### Images
- **Avatars**: 200x200px, square format
- **Logos**: 300x150px, transparent background preferred
- **Dashboard Mockups**: 800x600px, modern UI design
- **Background Images**: 1920x1080px, dark/neutral tones
- **OG Image**: 1200x630px, branded design

#### Icons
- **Favicon**: 32x32px, SVG format preferred
- **Social Icons**: 24x24px, consistent style

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint
```

### Contact Form
The contact form currently uses a simulated submission. To connect to a real backend:

1. Update the `handleSubmit` function in `Contact.jsx`
2. Add your form submission endpoint
3. Handle success/error responses

### Analytics
Add Google Analytics or other tracking:

```javascript
// In index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder
3. Configure redirects for React Router

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: contact@fugeniz.com
- LinkedIn: [Fugeniz](https://linkedin.com/company/fugeniz)
- WhatsApp: +91 98765 43210

---

**Fugeniz** - So real, you'll forget Artificial.
