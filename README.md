# Gallery App Roadmap

 - [x] Make it deploy with vercel
 - [x] Basic UI with mock data
 - [ ] Set up proper postgres database
 - [ ] Connect database with UI
 - [ ] Implement authentication with clerk
 - [ ] Add image uploading
 - [ ] Error handling with sentry
 - [ ] Routing image page
 - [ ] Image delete button server actions
 - [ ] Analytics with posthog
 - [ ] Ratelimiting with upstash

QOL NOTES:
1. OPTIONAL In next.config.js ignore ts and eslint errors and do it with github actions 
    typescript: {
        ignoreBuildErrors: true;
    },
    eslint: {
        ignoreDuringBuilds: true;
    },

2. OPTIONAL In package.json, enabling '--turbo' for the dev command makes 
  "scripts": {
    "dev": "next dev --turbo",
  }