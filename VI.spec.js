const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/search?q=vodafoneindia&oq=vodafoneindia&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQyNDRqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Vi (Vodafone Idea) - Vi Max' }).click();
  await page.getByRole('button', { name: 'No thanks' }).click();
  await page.getByRole('link', { name: 'Mobile Recharge', exact: true }).click();
  await page.locator('#revampScrollspy').getByText('hero unlimited').click();
  await page.getByRole('button', { name: 'Postpaid' }).click();
  await page.getByRole('link', { name: 'Pay Bill Online' }).click();
  await page.getByRole('button', { name: 'No thanks' }).click();
  await page.locator('#navbarMainContent').getByRole('link', { name: 'International Roaming' }).click();
  await page.locator('#navbarMainContent').getByRole('link', { name: 'Prepaid to Postpaid' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();