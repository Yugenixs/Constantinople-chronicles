# Fall of Constantinople 1453

An **editorial data visualization** project in Indonesian about the Fall of Constantinople on May 29, 1453. Built with Next.js 14 (App Router), Tailwind CSS v4, Framer Motion, and Recharts.

## Stack

- **Next.js 14** (App Router, React 18)
- **TypeScript** (strict)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** for scroll-linked animations
- **Recharts** for all hand-crafted charts

## Feature

- 11 editorial scrollytelling sections
- 9 historical data visualization panels with primary source citations
- Fully responsive (desktop + mobile)
- Typography: Instrument Serif (headings) + Inter (body)
- Monochrome palette with reddish accents for dramatic emphasis

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Deploy to Vercel via GitHub

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. Open [vercel.com/new](https://vercel.com/new), then select the repository.
3. Vercel will automatically detect Next.js. No configuration changes required.
4. Click **Deploy**. Done.

No environment variables are required..

## Structure

```
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── SectionNumber.tsx
│   ├── sections/
│   └── ui/
│       └── SourceNote.tsx
├── data/
│   └── historical.ts
├── public/
│   ├── favicon.svg
│   ├── opengraph.jpg
│   └── images/
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Data Source

Each visualization includes citations of primary or secondary sources in a small panel below it, ranging from Treadgold, Runciman, Crowley, Inalcik, Geanakoplos, to the eyewitness diary of Nicolò Barbaro.

## Contact

- Email: yugenix555@gmail.com
- Twitter: [@yugenixs](https://twitter.com/yugenixs)
- GitHub: [@yugenix](https://github.com/yugenix)
