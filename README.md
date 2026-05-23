**Open-source STEM curriculum viewer for Egyptian high school students**

![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## What is this?

This repository is the open-source curriculum layer of [EduTrace](https://edutrace.app) - a free platform for Egyptian STEM students in Grades 10-11. It contains the full curriculum viewer with all Learning Outcomes, MDX lesson content, and the LO short-code routing system (`/PH.1.01`, etc.).

## Features

- **LO-based curriculum structure** - organized by grade, semester, and subject
- **Short-code routing** - visit any learning outcome at paths like `/PH.1.01`
- **Embed system** - iframe-friendly lesson views at `/embed/[code]`
- **Full MDX rendering** - KaTeX math and syntax-highlighted code blocks
- **Grade 10 and Grade 11 content** - complete STEM curriculum for both grades

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### Setup

```bash
git clone https://github.com/your-org/EduTraceAPP.git
cd EduTraceAPP
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/       # Next.js routes, layouts, MDX components, and UI
content/   # MDX curriculum files (grades, semesters, subjects, LOs)
public/    # Static assets (icons, images)
```

## Contributing

Content improvements and bug fixes are welcome. Open a PR with your changes.

---

Built with ❤️ by the EduTrace team - [edutrace.app](https://edutrace.app)
