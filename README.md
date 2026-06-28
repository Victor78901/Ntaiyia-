# AleXntaiyia Betts

A modern, responsive betting website that can be deployed for free on GitHub Pages.

## Features

- Modern gradient design with purple theme
- Responsive layout for all devices
- Interactive event cards with betting odds
- Smooth scrolling navigation
- Animated card effects
- Mobile-friendly interface
- Static login/signup system (frontend-only)
- User authentication using localStorage
- Protected betting features (login required)

## Logo

The website features the "AN" logo representing AleXntaiyia Betts.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `alexntaiyia-betts`)
4. Make sure it's set to **Public**
5. Click "Create repository"

### Step 2: Upload Files

1. In your new repository, click "uploading an existing file"
2. Drag and drop or select these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Scroll down and click "Commit changes"

### Step 3: Enable GitHub Pages

1. In your repository, click on "Settings" (top menu)
2. In the left sidebar, click on "Pages"
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" (or "master") and click "Save"
5. Wait 1-2 minutes for the site to deploy

### Step 4: Access Your Website

Your website will be available at:
```
https://[your-username].github.io/[repository-name]/
```

For example:
```
https://johndoe.github.io/alexntaiyia-betts/
```

## Local Testing

To test the website locally before deploying:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
3. Visit `http://localhost:8000` in your browser

## Login System

This website includes a **static login system** that works entirely in the browser:

- **Sign Up**: Create new accounts (stored in browser localStorage)
- **Login**: Authenticate with username and password
- **Logout**: End session and clear login state
- **Protected Features**: Must be logged in to place bets
- **Data Storage**: User credentials stored in browser localStorage
- **No Backend Required**: Works 100% statically on GitHub Pages

**Note**: This is a demo login system. In production, you would need:
- Backend authentication server
- Database for user credentials
- Secure password hashing
- Session management
- HTTPS encryption

## Customization

### Changing Colors

Edit the gradient colors in `style.css`:
- Line 12: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
- Replace `#667eea` and `#764ba2` with your preferred colors

### Adding More Events

Add new event cards in `index.html` within the `events-grid` div:
```html
<div class="event-card">
    <h3>Sport Name</h3>
    <p>Event Details</p>
    <div class="odds">
        <span>Option 1: 1.50</span>
        <span>Option 2: 2.00</span>
    </div>
    <button class="bet-button">Place Bet</button>
</div>
```

### Updating Content

- **Title**: Change in `index.html` line 4
- **Logo Text**: Change in `index.html` line 10
- **Navigation**: Edit links in `index.html` lines 13-18
- **Promotions**: Update in the promotions section of `index.html`

## File Structure

```
alexntaiyia-betts/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)

## Notes

- This is a demo/frontend-only website
- No actual betting functionality is implemented
- For a production betting site, you would need:
  - Backend server
  - Database
  - Payment processing
  - User authentication
  - Legal compliance and licensing

## License

MIT License - feel free to use this template for your projects.

## Support

For issues or questions, please open an issue in the GitHub repository.

---

**Disclaimer**: This is a template/demo website. Online betting may be illegal in your jurisdiction. Please ensure compliance with local laws and regulations.