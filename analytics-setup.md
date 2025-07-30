# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring" or "Create account" (if you don't have an account yet)
4. If you already have an account, click the gear icon (⚙️) in the bottom left, then "Create account"
5. Enter your account name (e.g., "Sen Zhang Portfolio")
6. Click "Next"
7. Choose "Web" as your property type
8. Enter your website details:
   - Property name: "Sen Zhang Portfolio"
   - Website URL: `https://szhang.github.io/SenZhangResume/`
   - Industry category: "Business"
   - Reporting time zone: Your timezone
9. Click "Next"
10. Choose your business objectives (you can select multiple or skip)
11. Click "Create"

## Step 2: Get Your Measurement ID

After creating your property, you'll be taken to the setup page. Look for:

1. **Measurement ID**: It will look like `G-XXXXXXXXXX` (e.g., G-ABC123DEF4)
2. **If you don't see it immediately**: 
   - Click the gear icon (⚙️) in the bottom left
   - Go to "Property Settings" 
   - Look for "Measurement ID" in the property details

**Note**: The Measurement ID is what you'll use in your tracking code.

## Step 3: Add Google Analytics to Your Website

### Option A: Using the Setup Wizard (Recommended)
1. In Google Analytics, follow the setup wizard
2. Choose "Install manually" when prompted
3. Copy the provided tracking code
4. Add it to the `<head>` section of all your HTML files (index.html, contact.html)

### Option B: Manual Installation
Add this code to the `<head>` section of all your HTML files (index.html, contact.html):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Note:** Replace `G-XXXXXXXXXX` with your actual Measurement ID from Google Analytics.

### Where to Add the Code
Add the tracking code just before the closing `</head>` tag in both:
- `index.html`
- `contact.html`

## Step 4: Enhanced SEO Features

Your website already includes these SEO features:

- ✅ Structured data (JSON-LD)
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Breadcrumb navigation
- ✅ Semantic HTML structure

## Step 5: Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://szhang.github.io/SenZhangResume/`
3. Verify ownership (usually via HTML file or meta tag)
4. Submit your sitemap.xml

## Step 6: Additional SEO Tips

- Regularly update your content
- Use descriptive alt text for images
- Ensure fast loading times
- Make sure your site is mobile-friendly
- Build quality backlinks
- Use internal linking between pages

## Important Notes

- After adding Google Analytics, it may take 24-48 hours for data to start appearing in your dashboard
- Keep your Measurement ID secure and don't share it publicly
- Consider implementing privacy controls and cookie consent if targeting EU users 