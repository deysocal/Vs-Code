import  {test, expect} from '@playwright/test'
test ('awstest', async({page})=>{

await page.goto ('https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fap-south-1.console.aws.amazon.com%2Fec2%2Fhome%3FhashArgs%3D%2523Home%253A%26isauthcode%3Dtrue%26oauthStart%3D1719777299372%26region%3Dap-south-1%26state%3DhashArgsFromTB_ap-south-1_e5e9c101961be654&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fec2-tb&forceMobileApp=0&code_challenge=s2Dqjxkvxs_GhhsMV627Vy-byvXuBUWeyJW_L1E2laI&code_challenge_method=SHA-256')
await page.pause()
})