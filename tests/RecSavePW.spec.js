import { test, expect } from '@playwright/test';
//const { chromium } = require('@playwright/test')

test ('record save demo',async ({page}) => {
  // const browser = await chromium.launch({
  //   headless: false
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();
  await page.getByPlaceholder('Search Wikipedia').click();
  await page.getByPlaceholder('Search Wikipedia').fill('India');
  await page.getByRole('link', { name: 'India Country in South Asia' }).click();
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('Sourav Kumar Dey');
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('Sourav Kumar Dey63');
  await page.getByRole('link', { name: 'Wikipedia The Free' }).click();

  // ---------------------
 // await context.close();
  await browser.close();
});