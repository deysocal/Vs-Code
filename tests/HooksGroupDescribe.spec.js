import { test, expect } from '@playwright/test'
import { describe } from 'node:test';

test.describe('All My Tests', () => {



    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/index.html')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator(' [data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        //await page.close()
    })

    // test.afterAll(async ({ page }) => {
    //     await page.close()
    // })

    test.afterEach(async ({ page }) => {
        await page.close();
    });



    test('Homepage', async ({ page }) => {
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
        await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.locator('div:nth-child(6) > .pricebar > .btn_secondary').click();
        await page.locator('div').filter({ hasText: /^\$15\.99REMOVE$/ }).getByRole('button').click();
        //await page.close()
    })

    test('Logout', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('button', { name: 'Close Menu' }).click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        //await page.close();


    })
})

test('Log test', async ({ page }) => {

    await page.goto('https://stackoverflow.com/')
    if (await page.$('//*[@class="s-btn w100 wmx2 fs-body2 px32 bar-md bg-orange-400 h:bg-orange-500 fc-white d:fc-black-600 p-ff-source-bold mt-auto"]')
    )

    {await page.pause()
        await page.locator('#content').getByRole('banner').getByRole('link', { name: 'Join the community' }).click();
        console.log ("Yahoo...Intelligent Revenue Made the Script..............")
    }

    else {

        console.log ("Sorry!!Intelligent Revenue Preparing the Script..............")
    }
    
})