import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myvi.in/');
  await page.getByRole('button', { name: 'Prepaid' }).click();
  await page.getByRole('link', { name: 'Mobile Recharge', exact: true }).click();
  await page.getByRole('button', { name: 'Prepaid' }).click();
  await page.getByRole('link', { name: 'SMS packs', exact: true }).click();
  await page.getByRole('button', { name: 'Prepaid' }).click();
  await page.locator('#navbarMainContent').getByRole('link', { name: 'Data Plans' }).click();
  await page.getByRole('button', { name: 'Prepaid' }).click();
  await page.getByRole('button', { name: 'Postpaid' }).click();
  await page.getByRole('link', { name: 'Pay Bill Online' }).click();
  await page.getByRole('button', { name: 'New Connection' }).click();
  await page.locator('#navbarMainContent').getByRole('link', { name: 'Fancy Number' }).click();
});