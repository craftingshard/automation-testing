# Playwright E2E Automation Suite 🚀

This repository contains a **Playwright-based end-to-end (E2E) automation framework** with CI/CD integration via GitHub Actions.

## ✨ Features
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel execution & retries
- ✅ Custom fixtures (multi-page testing)
- ✅ CI/CD pipeline (GitHub Actions)
- ✅ Allure report integration for rich reporting

## 📦 Setup
```bash
npm install
npx playwright install

## 🧪 Run Tests
npm run test
npm run test:headed
npm run test:ui

## 📊 Reports
Playwright HTML Report → npx playwright show-report
Allure Report → npm run report:allure

---

```bash
git add .
git commit -m "Initial Playwright automation framework"
git push origin main
