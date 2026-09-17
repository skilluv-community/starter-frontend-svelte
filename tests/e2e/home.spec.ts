import { expect, test } from '@playwright/test';

test('home page renders title and nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  // Nav has "Counter" and "API demo" links; home cards also link to them, so
  // scope to <nav> to disambiguate.
  const nav = page.getByRole('navigation');
  await expect(nav.getByRole('link', { name: /counter/i })).toBeVisible();
  await expect(nav.getByRole('link', { name: /api/i })).toBeVisible();
});

test('counter page increments', async ({ page }) => {
  await page.goto('/counter');
  const value = page.getByTestId('counter-value');
  await expect(value).toHaveText('0');
  await page.getByRole('button', { name: /increment/i }).click();
  await page.getByRole('button', { name: /increment/i }).click();
  await expect(value).toHaveText('2');
});
