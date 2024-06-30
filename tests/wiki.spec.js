import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();
  await page.getByPlaceholder('Search Wikipedia').click();
  await page.getByPlaceholder('Search Wikipedia').fill('20204 loksabha');
  await page.getByRole('link', { name: '2004 Indian general election' }).click();
  await page.getByRole('link', { name: 'Wikipedia The Free' }).click();
});