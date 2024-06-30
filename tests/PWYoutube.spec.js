import { test, expect } from '@playwright/test';

test('test YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').fill('Automation step by step');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.locator('#start').getByLabel('Guide').click();
  await page.locator('#sign-in-button').getByLabel('Sign in').click();
  await page.goto('https://www.youtube.com/');
});