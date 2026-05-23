# EduTrace

Open-source **curriculum viewer** extracted from [EduTrace](https://edutrace.app). Browse Grade 10 and 11 STEM learning outcomes, revision guides, and practical sheets — with no database, authentication, or API keys required.

## Features

- **Grade dashboards** — `/grade10/semester1`, `/grade11/semester2`, etc.
- **Short LO codes** — `/PH.2.01` maps to the correct MDX file under `content/`
- **Embed mode** — `/embed/PH.2.01` for iframe-friendly lesson embeds
- **MDX rendering** — KaTeX math, syntax highlighting, interactive MDX components
- **Sidebar navigation** — per-semester subject and LO outline

## Excluded (vs full EduTrace)

Authentication, AI assistant, notes, todos, admin, APIs, MongoDB, email, CDN uploads, and progress tracking are not included.

## Requirements

- Node.js **22+**
- npm **10+**

## Quick start

```bash
git clone <your-repo-url> EduTraceAPP
cd EduTraceAPP
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start dev server (Turbopack) |
| `npm run build`   | Production build           |
| `npm run start`   | Run production server      |
| `npm run lint`    | ESLint                     |
| `npm run type-check` | TypeScript check        |

## Project structure

```
app/
  grade10/          Semester dashboards, revision & practical routes
  grade11/
  [code]/           Short-code LO pages (e.g. /PH.2.01)
  embed/[code]/     Embeddable LO viewer
  components/mdx/   MDX component library
content/            MDX curriculum files
lib/
  loCodeUtils.ts    Client-safe LO code helpers
  loCodeMapping.ts  Server-side path resolution
```

## Content

All lessons live in `content/grade{10|11}/semester{1|2}/{subject}/*.mdx`. Add or edit MDX files and restart the dev server to see changes.

## License

Same license as the parent EduTrace project (adjust as needed for your fork).
