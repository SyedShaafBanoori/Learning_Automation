import {test} from '@playwright/test'

test('Hidden Items in Dropdown', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Login
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[type="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await page.locator("//span[normalize-space()='PIM']").click()

    await page.locator('//div/div[6]/div/div[2]/div/div/div[2]/i').click()
    const options = await page.$$("//div[@role='listbox']//span")
    for(let option of options)
    {
        const jobtitle = await option.textContent()
        // console.log(jobtitle)
        if(jobtitle.includes('QA Engineer'))
        {
            await option.click()
            break
        }
    }

    await page.waitForTimeout(3000)

})