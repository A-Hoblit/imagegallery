This application is a fully-featured image gallery on a serverless architecture.

# Gallery App Roadmap

- [x] Make it deploy with vercel
- [x] Basic UI with mock data
- [x] Set up proper postgres database
- [x] Connect database with UI
- [x] Implement authentication with clerk
- [x] Add image uploading
- [x] Error handling with sentry
- [x] Routing image page
- [x] Analytics with posthog
- [x] Image delete button server actions

# Technologies Used:

0. Typescript, React, and Tailwind. 

1. Vercel for hosting, deployment and it's postgres database integration

2. Clerk for authentication and user management

3. UploadThing for image storage and hosting

4. Sentry for error tracking and management

5. Posthog for analytics tracking and management

# QOL Notes

1. OPTIONAL In next.config.js ignore ts and eslint errors and do it with github actions

```
    typescript: {
        ignoreBuildErrors: true;
    },
    eslint: {
        ignoreDuringBuilds: true;
    },
```

2. OPTIONAL In package.json, enabling '--turbo' for the dev command; ~10x faster compiles.

- NOTE: not compatible with using Sentry local testing

```
  "scripts": {
    "dev": "next dev --turbo",
  }
```

SCRIPTS:

1. pnpm dev - opens a live preview locally
2. pnpm run db:push - applies schema changes to database
3. pnpm run db:studio - opens a local site with a DB editor

GIT COMMANDS:

- All of these can be conveniently done in the github desktop app, what I usually use.

1. git status - Lists modified files in repository
2. git add -p - Goes through and reviews each change before adding them
3. git commit -m "SUMMARY" - Commits all changes with listed summary description
