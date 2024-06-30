import { test, expect } from '@playwright/test'
test('Hooks & Groups Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
    await page.close()
})

test('Homepage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');


    await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
    await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.locator('div:nth-child(6) > .pricebar > .btn_secondary').click();
    await page.locator('div').filter({ hasText: /^\$15\.99REMOVE$/ }).getByRole('button').click();
    await page.close()
})

test.only('Logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Close Menu' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();


})