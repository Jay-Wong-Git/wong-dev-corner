## Wong Dev Corner 🗒️:

Wong Dev Corner is a developer community platform designed to help developers work together, share ideas, and have a great time doing it. It's made using top-notch tools like Next.js, MongoDB, TypeScript, TailwindCSS, and shadcn/ui.

![Home](/public/assets/screenshots/home.png)

## Screenshots 📸:

![Home](/public/assets/screenshots/home.png)
![Community](/public/assets/screenshots/community.png)
![Collection](/public/assets/screenshots/collection.png)
![Tag](/public/assets/screenshots/tag.png)
![Profile](/public/assets/screenshots/profile.png)
![Job](/public/assets/screenshots/job.png)
![Ask Question](/public/assets/screenshots/ask-question.png)
![Dark Mode](/public/assets/screenshots/dark-mode.png)

## Tech Stack 🛠️:

- `Next.js` 14.1.0
- `MongoDB` 6.3.0 and `Mongoose` 8.1.1
- `TailwindCSS` 3.3.0
- `TypeScript` 5
- `Clerk` 4.29.5
- `Zod` 3.22.4
- `shadcn/ui`
- [Vercel](https://vercel.com/)

## Setting up locally ⚙️

### 1. Clone on your local machine

```bash
https://github.com/Jay-Wong-Git/wong-dev-corner.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables to your `.env.local` file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_TINY_EDITOR_API_KEY=

MONGODB_URL=

WEBHOOK_SECRET=

RAPID_API_KEY=
RAPID_API_HOST
```

### 4. Run on your local server

```bash
npm run dev
```

If you have read all of this, please star the repo, it will help me a lot ❤️
