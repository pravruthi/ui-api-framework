# UI + API Automation Framework

A combined UI and API test automation framework built with Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Status
🚧 Under construction — Day 1 of 30-day build plan.

## Setup
_(to be added as the framework takes shape)_
ui-api-framework/
├── src/
│   ├── ui/
│   │   ├── pages/            # Page Object classes
│   │   └── components/
│   ├── api/
│   │   └── clients/          # one client class per resource
│   ├── config/
│   ├── fixtures/              # combined UI+API fixtures
│   ├── schemas/
│   ├── types/
│   └── utils/
├── tests/
│   ├── ui/
│   ├── api/
│   └── integration/           # hybrid UI+API tests
├── .github/ (optional)
├── Jenkinsfile
├── playwright.config.ts
└── package.json