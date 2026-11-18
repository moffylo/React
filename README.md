# Moffylo Limited — React website

This is a React + Vite conversion starter built from the uploaded static website.

## Run locally
1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in this folder and run `npm install`.
4. Run `npm run dev` and open the local address shown in the terminal.
5. Run `npm run build` to create the production build in `dist/`.

## What was converted
- Home, About and Contact pages
- Services listing and individual service pages using reusable React components
- Existing logo, photos, service gallery images and partner images
- Responsive navigation, service dropdown, service cards, mobile menu and route navigation

## Important before publishing
- The original `process_form.php` is not used. A React frontend alone cannot send email securely. Connect the contact form to a server-side API or a trusted form service before enabling submissions.
- Confirm the business phone numbers, email address, office addresses, social profile links and partner-logo permissions.
- The original HTML contained legacy JavaScript that attached handlers to elements that do not exist on every page. That script was replaced with React-managed interactions.
- Google Fonts are loaded online; add local font files if the site must work fully offline.
- The source zip's original HTML/CSS/JS files are preserved separately in your original upload; this React project is a clean rebuild, not a destructive edit of those files.
