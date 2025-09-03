# GTA Toronto Pest Control Website

A modern, mobile-first, SEO-optimized website for GTA Toronto Pest Control, designed to maximize lead generation and provide an excellent user experience across all devices.

🔗 **Live Demo**: [View on GitHub Pages](https://6ixstack.github.io/gtapestcontrol)

## 🚀 Quick Deploy to GitHub Pages.

This repository is configured for **automatic deployment** to GitHub Pages. Just follow these steps:

### Step 1: Create Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: GTA Toronto Pest Control website"

# Create repository on GitHub and add remote
git remote add origin https://github.com/6ixstack/gtapestcontrol.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy! 🎉

### Step 3: Access Your Live Site
Your website will be available at: `https://6ixstack.github.io/gtapestcontrol`

> **Built by**: Mohaimen Khan (@mohaimenhasan) for 6ixStack Solutions

## 🚀 Features

### Design & User Experience
- **Mobile-First Responsive Design** - Optimized for smartphones, tablets, and desktop
- **Professional Branding** - Clean, trustworthy design with consistent green accent color
- **Fast Loading** - Optimized performance with minimal code and efficient assets
- **Accessibility Compliant** - WCAG guidelines followed for inclusive design

### Lead Generation Focus
- **Prominent Call-to-Actions** - Multiple contact options (phone, form, email)
- **Quote Request Form** - Streamlined form with service selection
- **Phone Click Tracking** - Analytics-ready phone number tracking
- **10% Discount Promotion** - Eye-catching promotional badge

### SEO Optimization
- **Semantic HTML5** - Proper heading structure and semantic elements
- **Meta Tags** - Optimized title, description, and keywords
- **Structured Data** - JSON-LD LocalBusiness schema markup
- **Fast Performance** - Sub-3 second load time target

### Key Sections
- **Hero Section** - Compelling headline with instant contact options
- **Services Grid** - Visual service breakdown with icons
- **Trust Builders** - Experience, guarantees, certifications, ratings
- **Customer Testimonials** - Social proof with 5-star reviews
- **Areas Served** - Geographic coverage display
- **Contact Form** - Lead capture with auto-save functionality

## 📁 File Structure

```
pestcontrol/
├── index.html          # Main homepage
├── styles.css          # Responsive CSS styles
├── script.js           # JavaScript functionality
├── logo.svg            # Company logo (SVG format)
└── README.md           # This documentation
```

## 🛠️ Technical Implementation

### HTML Structure
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Accessible form labels and ARIA attributes
- Schema.org structured data for local business

### CSS Features
- **Mobile-First Approach** - Base styles for mobile, enhanced for larger screens
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom Properties** - Consistent color scheme and spacing
- **Smooth Animations** - Subtle hover effects and transitions
- **Print Styles** - Optimized for printing

### JavaScript Functionality
- **Mobile Navigation** - Hamburger menu with smooth animations
- **Form Validation** - Client-side validation with user feedback
- **Smooth Scrolling** - Enhanced navigation experience
- **Performance Monitoring** - Page load time tracking
- **Auto-save Forms** - Local storage backup for form data
- **Analytics Ready** - Event tracking placeholders

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (Base styles)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1199px
- **Large Desktop**: 1200px+

## 🎯 SEO & Performance

### Meta Tags Implemented
- Title: "Pest Control Toronto | GTA Toronto Pest Control – Exterminator Services GTA"
- Description: Focus on location, services, and benefits
- Keywords: Targeted pest control and location terms

### Structured Data
- LocalBusiness schema with:
  - Business name and contact info
  - Service areas (Toronto, GTA)
  - Aggregate rating (4.8 stars)
  - Operating hours (24/7)

### Performance Optimizations
- Minified and efficient CSS
- Optimized images with proper alt tags
- Lazy loading for images
- Efficient JavaScript execution
- Reduced HTTP requests

## 📞 Contact Information

**Phone**: (416) 907-4270  
**Email**: info@gtatorontopestcontrol.ca  
**Service Area**: Toronto & Greater Toronto Area  
**Hours**: 24/7 Emergency Service Available

## 🌐 GitHub Pages Deployment

### Automatic Deployment
- **GitHub Actions Workflow**: Automatically deploys on push to main branch
- **No Build Process**: Direct deployment of static files
- **HTTPS Enabled**: Automatic SSL certificate from GitHub
- **Custom Domain Ready**: CNAME file included for custom domains

### Manual Deployment (Alternative)
If you prefer manual deployment:

1. **Upload Files**: Upload all files to your web server
2. **Update Logo**: Replace `logo.svg` with your actual logo  
3. **Configure Analytics**: Add your Google Analytics tracking ID
4. **Form Handler**: Connect the contact form to your preferred form processing service
5. **SSL Certificate**: Ensure HTTPS is enabled for security
6. **Test Mobile**: Verify mobile functionality across devices

### Deployment Troubleshooting

**Common Issues & Solutions:**

1. **404 Error on GitHub Pages**
   - Ensure repository is public or you have GitHub Pro
   - Check that `index.html` is in the root directory
   - Verify GitHub Pages is enabled in repository settings

2. **Workflow Fails**
   - Go to Actions tab to see detailed error logs
   - Ensure you have Pages enabled in repository settings
   - Check that workflow has proper permissions

3. **Custom Domain Setup**
   - Add your domain to the `CNAME` file
   - Configure DNS CNAME record pointing to `6ixstack.github.io`
   - Allow 24-48 hours for DNS propagation

4. **Form Not Working**
   - GitHub Pages only supports static content
   - Use services like Formspree, Netlify Forms, or Zapier for form handling
   - Update form action attribute with your chosen service

### Form Integration Options

Since GitHub Pages doesn't support server-side processing, integrate with:

- **Formspree** (Recommended): `action="https://formspree.io/f/YOUR_FORM_ID"`
- **Netlify Forms**: For enhanced form handling
- **Google Forms**: Free alternative with Google Sheets integration
- **EmailJS**: Send emails directly from client-side JavaScript

## 🔧 Customization Options

### Branding
- Update logo file (`logo.svg`)
- Modify color scheme in CSS (search for `#16a34a`)
- Update company name throughout HTML

### Content
- Replace testimonials with actual customer reviews
- Update service descriptions based on specific offerings
- Modify service areas in footer and structured data

### Analytics
- Uncomment Google Analytics script in HTML
- Replace placeholder GA tracking ID
- Set up conversion tracking for form submissions

## 📈 Analytics & Tracking

The website includes event tracking for:
- Quote form submissions
- Phone number clicks
- Page load performance
- Mobile menu interactions

## 🔒 Security Considerations

- All forms include CSRF protection placeholders
- Input validation on client and server side
- Secure HTTPS implementation required
- No sensitive data stored in client-side code

## 📞 Support

For technical support or customization requests, contact the development team. The website is built with clean, maintainable code that can be easily modified by any web developer.

---

**Built by Mohaimen Khan (@mohaimenhasan) for 6ixStack Solutions**

🔗 **Live Site**: https://6ixstack.github.io/gtapestcontrol  
🏢 **Organization**: [6ixStack on GitHub](https://github.com/6ixstack)  
👨‍💻 **Developer**: [Mohaimen Khan](https://github.com/mohaimenhasan)

*Built with modern web standards for optimal performance and user experience.*
