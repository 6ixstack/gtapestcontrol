# GitHub Pages Deployment Checklist

## Pre-Deployment Setup

### 1. Repository Setup
- [ ] Create new repository on GitHub
- [ ] Repository name: `pestcontrol` (or your preferred name)
- [ ] Set repository to **Public** (required for free GitHub Pages)

### 2. Local Setup
```bash
# Navigate to your project directory
cd /Users/mohaimenkhan/repos/pestcontrol

# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: GTA Toronto Pest Control website

✨ Features:
- Mobile-first responsive design
- SEO optimized with structured data
- Contact form with validation
- Professional pest control branding
- GitHub Pages ready with auto-deployment

Built by Mohaimen Khan (@mohaimenhasan) for 6ixStack Solutions"

# Add remote repository for 6ixStack organization
git remote add origin https://github.com/6ixstack/gtapestcontrol.git

# Push to GitHub
git push -u origin main
```

## GitHub Pages Configuration

### 3. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/6ixstack/gtapestcontrol`
2. Click the **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The GitHub Actions workflow will automatically trigger

### 4. Verify Deployment
- [ ] Check **Actions** tab to see deployment progress
- [ ] Wait for green checkmark indicating successful deployment
- [ ] Visit your live site: `https://6ixstack.github.io/gtapestcontrol`

## Post-Deployment Customization

### 5. Update Configuration Files
Replace placeholders with actual values:

**_config.yml:** ✅ Already configured for 6ixStack
```yaml
url: "https://6ixstack.github.io"
baseurl: "/gtapestcontrol"
github_username: "6ixstack"
repository: "6ixstack/gtapestcontrol"
developer: "mohaimenhasan"
```

**robots.txt:** ✅ Already configured
```
Sitemap: https://6ixstack.github.io/gtapestcontrol/sitemap.xml
```

**sitemap.xml:** ✅ Already configured with correct URLs

### 6. Custom Domain Setup (Optional)
If using a custom domain:

1. **Update CNAME file:**
   ```
   gtatorontopestcontrol.ca
   ```

2. **Configure DNS:**
   - Add CNAME record: `www.gtatorontopestcontrol.ca` → `6ixstack.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable in GitHub:**
   - Go to Settings → Pages on https://github.com/6ixstack/gtapestcontrol
   - Enter custom domain in "Custom domain" field
   - Check "Enforce HTTPS"

### 7. Form Integration
Since GitHub Pages is static, integrate form with a service:

**Option A: Formspree (Recommended)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
- Deploy to Netlify instead of GitHub Pages for built-in form handling

**Option C: EmailJS**
- Add EmailJS script for client-side email sending

### 8. Analytics Setup
1. **Google Analytics:**
   ```html
   <!-- Replace GA_MEASUREMENT_ID with your actual ID -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Google Search Console:**
   - Add property for your domain
   - Submit sitemap: `https://6ixstack.github.io/gtapestcontrol/sitemap.xml`

## Testing Checklist

### 9. Functionality Testing
- [ ] **Mobile responsiveness** on various devices
- [ ] **Navigation** - all anchor links work
- [ ] **Phone links** click-to-call functionality
- [ ] **Form validation** - test required fields
- [ ] **Page speed** - check loading times
- [ ] **Cross-browser** compatibility (Chrome, Safari, Firefox, Edge)

### 10. SEO Testing
- [ ] **Google PageSpeed Insights** - score above 90
- [ ] **Mobile-Friendly Test** - passes Google's test
- [ ] **Structured data** - validate with Google's tool
- [ ] **Meta tags** - proper title and description
- [ ] **SSL certificate** - site loads with HTTPS

## Maintenance

### 11. Regular Updates
- [ ] Update contact information as needed
- [ ] Refresh testimonials with new reviews
- [ ] Update service areas if expanding
- [ ] Monitor and respond to form submissions
- [ ] Check analytics for performance insights

### 12. SEO Monitoring
- [ ] Track rankings for target keywords
- [ ] Monitor Google Search Console for crawl errors
- [ ] Update content based on user behavior
- [ ] Build local business citations

## Troubleshooting

### Common Issues:
1. **404 Error:** Repository might be private or Pages not enabled
2. **Workflow Failed:** Check Actions tab for detailed logs
3. **Custom Domain Issues:** Verify DNS settings and CNAME file
4. **Form Not Working:** Ensure form action points to external service

### Support Resources:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Google Search Console](https://search.google.com/search-console)

---

**🎉 Congratulations!** Your pest control website is now live and optimized for lead generation!

**Live URL:** `https://6ixstack.github.io/gtapestcontrol`

**Built by:** Mohaimen Khan (@mohaimenhasan) for 6ixStack Solutions  
**Organization:** https://github.com/6ixstack