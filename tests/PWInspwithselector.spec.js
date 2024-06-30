import { test, expect } from '@playwright/test'
test('IsprecDemo', async ({ page }) => {
    await page.goto('https://automationstepbystep.com/')
    await page.pause()
    await page.locator('//*[@id="menu-item-74"]').click()
    //await page.getByLabel('Close').click()
    await page.getByTitle('cypress beginner tutorial').click()
    


})