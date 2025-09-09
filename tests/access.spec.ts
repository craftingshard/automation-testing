import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://booktourly.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Website Tour Du Lịch");
});

test('get started link', async ({ page }) => {
  await page.goto('https://booktourly.netlify.app/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Liên hệ' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Liên hệ' })).toBeVisible();
});
