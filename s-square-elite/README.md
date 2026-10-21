# S Square Elite Gift Shop

A responsive React + Vite frontend for a premium, playful toy and gift e-commerce store.

## Requirements
- Node.js 18 or newer
- npm
- IntelliJ IDEA (or another editor)

## Run locally
1. Extract the ZIP file.
2. Open the extracted `s-square-elite` folder in IntelliJ IDEA.
3. Open the built-in terminal in the project root.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Build check
```bash
npm run build
```

## Included
- Responsive home page with autoplay hero carousel
- Search, category navigation, product listing and filters
- Product detail pages
- Cart and wishlist with localStorage persistence
- Demo login/register screens
- Demo checkout page (no real orders or payments)
- Mock product data ready to be replaced by backend API calls
- Your supplied S Square Elite logo in `public/images/logo.jpeg`

## Notes
- Product imagery currently uses remote Unsplash source URLs, so an internet connection is needed to load those images.
- The logo is local and will work offline.
- No backend, real authentication, inventory validation, or payment processing is included yet.
