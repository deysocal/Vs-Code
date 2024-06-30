const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://aws.amazon.com/?nc2=h_lg');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Solutions', exact: true }).click();
  await page.getByRole('link', { name: 'Learn', exact: true }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByLabel('Primary navigation').locator('div').click();
  await page.getByRole('link', { name: 'Get started for free' }).click();
  await page.getByText('Featured Offers for Business').click();

  // ---------------------
  await context.close();
  await browser.close();
})();