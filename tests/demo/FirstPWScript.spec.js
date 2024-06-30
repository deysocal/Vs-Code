const {test, expect}=require ('@playwright/test')

test ('My first test', async({page})=>{
    
await page.goto('https://wikipedia.org')
await expect (page).toHaveTitle('Wikipedia')

})