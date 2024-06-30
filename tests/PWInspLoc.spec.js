import { test, expect } from '@playwright/test'
test('IsprecDemo', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').click()
    await page.getByPlaceholder('Enter your username').fill('sourav')
    await page.getByPlaceholder('Enter your password').fill('Pass@123')
    await page.getByRole('link', { name: 'Sign in' }).click()

})