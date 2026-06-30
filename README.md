# UI + API Automation Framework

A combined UI and API test automation framework built with Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- Zod (env validation)

## Project Structure
src/

├── ui/pages/        # Page Object classes

├── api/clients/      # API client classes (one per resource)

├── config/           # Environment config loader

├── fixtures/          # Custom Playwright fixtures (UI + API merged)

tests/

├── ui/                # UI test specs

├── api/               # API test specs

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.dev` and fill in values
4. Run `npx playwright install` (if browsers aren't installed yet)

## Running Tests
- All tests: `npx playwright test`
- UI only (chromium): `npx playwright test --project=chromium`
- API only: `npx playwright test --project=api`
- View report: `npx playwright show-report`

## Conventions
- All spec files import `test`/`expect` from `@fixtures/index`, never directly from `@playwright/test`.
- Locators live only in page object classes under `src/ui/pages/`, never inline in test files.
- API calls go through client classes under `src/api/clients/`, never called as raw `request.get()` in tests.
- Environment values come from `src/config/env.ts`, never hardcoded.

## Status
🚧 Under construction — Week 1 complete (Day 7 of 30-day build plan).