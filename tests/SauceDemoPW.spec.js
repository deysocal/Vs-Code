//import { test, expect } from '@playwright/test';
const { test, expect } =require( '@playwright/test');
test('record demo test', async ({ page, context }) => {
  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    })
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button66"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await context.tracing.stop(
    { path: 'SauceDemo_trace.zip' })
});