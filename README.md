# SmartPomodoro Documentation

## Tech choices for the documentation project

### Overall site and structure - Docusaurus v3 + Mermaid

Fast static documentation site with search, sidebar, versioning, and theming.
Mermaid diagrams can be added directly in Markdown.
Docusaurus transpiles `.md` files into React components under the hood.

**Commands**

```bash
npm run docs:start   # start local dev server
npm run docs:build   # build for production
npm run docs:serve   # serve built site
```

---

### Frontend

#### Storybook v9.1.12

Living visual component catalog, demo, testing and documentation environment in one.
Includes A11y (axe) addon to catch contrast and focus issues early.
Runs on React and integrates seamlessly with Vite for fast builds.

#### Storybook addons

- @storybook/add-on/a11y for accessibility testing
- @storybook/add-on/docs for accessibility component documentation
- @storybook/add-on/onboarding information about using storybook
- @storybook/add-on/vitest for integrated vite-tests (downgraded to vitest: "^3.2.4" because of this)

**Commands**

```bash
npm run storybook        # start Storybook on http://localhost:6006
npm run build:storybook  # build static Storybook output
```

---

### API / Reference - JsDoc

Generates up-to-date documentation directly from code comments.
Can be extended with TypeDoc if using TypeScript for richer API output.

**Commands**

```bash
npm run docs:api   # generate JsDoc output under /docs/api
```

---

### Quality Guarantee - remark + markdownlint + cspell

Automatic validation for Markdown consistency, structure, and spelling.

**Commands**

```bash
npm run lint:md      # run markdownlint
npm run lint:remark  # run remark lint rules
npm run lint:spell   # run cspell spellcheck
npm run lint:docs    # run all linting tasks in parallel
```

---

### Unit Testing

Testrunner for unit tests
Others to maybe look at are Mocha, Cypress, Web Test Runner, WebDriverIO

#### Comparing

Vitest | Jest
Snapshots: yes | yes
mocks: yes | yes
performance: extremely fast | good
ecosystem: growing community | large
multi-browser support: yes | no
benchmarking: yes | no
battle-tested by large companies: no | yes
supports vite: yes | no

#### Vitest v3.2.4 (to work with storybook, latest is v4.0.2)

---

### End2End Testing - Playwright

npm init playwright@latest
choose: where = e2e, GitHub Actions=yes, Playwright browsers=yes
add playwright.config
add a test and test it with command: npx playwright test

---

### CI/CD - GitHub Actions

Validates, builds, and deploys documentation automatically.
Publishes the static Docusaurus site to GitHub Pages on every push to main.

Workflow file: `.github/workflows/deploy-docs.yml`

---

### Tooling & Developer Experience

#### Comparison

config effort: vite easy | webpack complex
config flexibility: vite little | webpack fine-grained
optimizations: vite modulepreload links | webpack prefetch preload

**Vite v4.0.2 + TypeScript**
Modern, fast bundling environment for React demos and documentation snippets.
Ensures consistent behavior across Storybook, Docusaurus, and JsDoc.

**Commands**

```bash
npm run dev       # start a Vite-based playground (if used)
npm run build     # build any Vite demos
```

## Configuration + Setup after npm install

**1. Vite setup**
Create vite.config.ts with @vitejs/plugin-react.
Add tsconfig.json to configure the TS compiler

Add src/components/DemoComponent.jsx (tiny demo).

**2. Storybook 9 bootstrap**

<!--
npx storybook@latest init --type react
-->

Create .storybook/main.ts (react + vite, addons: essentials, interactions, a11y).

Create .storybook/preview.ts (basic parameters).

Add src/css/custom.css

Add src/components/DemoComponent.stories.jsx.

Test with command

```bash
  npm run storybook
```

**3. Smoke-test Storybook**

Run npm run storybook and confirm the demo story renders.

**4. Docusaurus skeleton**

Add docusaurus.config.ts (v3, mermaid enabled, correct url/baseUrl).

Add sidebars.js matching your /docs/\*\* folders.

Create docs/index.md (landing) and at least one child page per section.

Test with command

```bash
  npm run docs:start
```

**5. Smoke-test Docusaurus**

Run npm run docs:start and confirm the site loads with sidebar + pages.

**6.JsDoc setup**

Add jsdoc.config.json (source: src, output: docs/api).

npx jsdoc -X -c jsdoc.config.cjs > .cache/jsdoc.json

Run npm run docs:api and confirm /docs/api is generated.

Generating markup for Docusaurus with:
npm run docs:js:md

**7. Markdown linting & spellcheck**

Add .markdownlint.json, .remarkrc.mjs, and cspell.json.

Run npm run lint:docs and fix any reported issues.

**8. Vite demo (optional)**

If you keep demo snippets, run npm run dev to validate the Vite playground starts (no build errors).

**9. GitHub Pages workflow (CI/CD)**

Add .github/workflows/deploy-docs.yml (build JsDoc → build Docusaurus → deploy).

Push a test commit on main and verify Pages deploys (no action needed yet).

**10. Lock versions / housekeeping**

Commit configs, ensure .gitignore excludes node_modules, build, and Storybook static if generated.

(Optional) Add shields/badges to README once CI runs green.
