# Excellence Coverage Risks

This project hosts the source code of the **XCR Courtier** website, a professional insurance brokerage platform. The application is built with [React](https://react.dev/) and [Vite](https://vitejs.dev/) using TypeScript and Tailwind CSS. It includes Playwright end‑to‑end tests and is configured for deployment on Netlify.

## Installation

```bash
npm install
```

Install all dependencies before starting development or building the project.

## Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement. The site will be available at `http://localhost:5173` by default.

## Building

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory. You can preview the build locally with:

```bash
npm run preview
```

## Running Tests

```bash
npm run test:e2e
```

Executes the Playwright test suite located in the `tests/` directory. Ensure the development server is running before launching the tests.

## Additional Scripts

- `npm run lint` – run ESLint against the source files.
- `npm run lighthouse` – generate a Lighthouse report for performance auditing.
- `npm run analyze` – bundle analysis using Vite.

---

This repository aims to provide a simple and maintainable starter for a modern React web application with full end‑to‑end coverage.
