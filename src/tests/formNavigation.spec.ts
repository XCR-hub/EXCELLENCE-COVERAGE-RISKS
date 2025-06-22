import { test, expect } from '@playwright/test';

test('homepage loads and navigation works', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/XCR/);

  // Navigation example
  await page.click('text=Contact');
  await expect(page).toHaveURL(/contact/);
});

test('contact form submits', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'Hello');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Thank you')).toBeVisible();
});