import { test, expect } from '@playwright/test'
test('assertion demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    await expect(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toHaveCount(1)
    console.log("This is a correct scripting")
    if (await page.$('//*[@class="chakra-heading css-dpmy2a"]')) {
        await page.locator('//*[@class="chakra-heading css-dpmy2a"]').click()
    }

    else {

        console.log('This is not correct condition')
    }
    //Visible or Hidden
    await expect(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toBeVisible()
    await expect.soft(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toBeHidden()
    //Enabled or Disabled
    await expect(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toBeEnabled()
    await expect.soft(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toBeDisabled()
    //to matches value or not
 await expect(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).toHaveText('The Kitchen')
await expect.soft(page.locator('//*[@class="chakra-heading css-dpmy2a"]')).not.toHaveText('The Kitchen')
//Element attribute

await expect (page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
//await expect (page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
await expect (page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
// or
// await expect (page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

await expect(page).toHaveURL('https://kitchen.applitools.com/');
await expect (page).toHaveTitle(/.*Kitchen/);
await expect (page).toHaveScreenshot ()
})