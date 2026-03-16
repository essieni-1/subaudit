# Auth Integration Instructions

## 1. Copy these files to your subaudit folder:
- login.html → subaudit/login.html
- dashboard.html → subaudit/dashboard.html

## 2. Update the hero button in index.html
Change:
  <a href="#" class="btn-primary" id="connect-bank-btn">Connect your bank free →</a>

To:
  <a href="login.html" class="btn-primary">Connect your bank free →</a>

## 3. Update the pricing buttons in index.html
Change both:
  <a href="#waitlist" class="btn-outline">Get started free</a>
  <a href="#waitlist" class="btn-primary">Start free trial</a>

To:
  <a href="login.html" class="btn-outline">Get started free</a>
  <a href="login.html" class="btn-primary">Start free trial</a>

## 4. Enable Email auth in Supabase
- Go to supabase.com → your project
- Authentication → Providers → Email → make sure it's enabled

## 5. Set redirect URL in Supabase
- Go to Authentication → URL Configuration
- Add to "Redirect URLs": https://essieni-1.github.io/subaudit-github.io/dashboard.html

## 6. Push to GitHub
git add .
git commit -m "add login and dashboard"
git push
