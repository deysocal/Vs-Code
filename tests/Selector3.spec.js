import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/index.html')
    //await page.pause()
    await page.click
        ('id=user-name')
    //Using Object Property
    //await page.locator ('id=user-name').fill('standard_user')
    //Using x-path
    await page.locator ('//*[@id="user-name"]').fill('standard_user')
    //Using Css Selector
    //await page.locator ('#user-name]').fill('standard_user')
    await page.locator ('//*[@id="password"]').fill('secret_sauce')
    await page.waitForSelector ('//*[@id="login-button"]',{timeout: 500})
    await page.locator ('//*[@id="login-button"]').click()
    await page.locator ('//*[@class="bm-burger-button"]').click()
    await page.locator ('//*[@class="bm-cross-button"]').click()
    await page.locator ('//*[@class="bm-burger-button"]').click()
    await page.locator ('//*[@id="logout_sidebar_link"]').click()


})