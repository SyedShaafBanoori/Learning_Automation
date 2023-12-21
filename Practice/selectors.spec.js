import {
    test,
    expect
} from '@playwright/test'

test('Selectors', async ({
    page
}) => {
    await page.goto('https://saucedemo.com/')
    // await page.pause();
    //Using Object Property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard-user')
    //Using CSS Selectors
    await page.locator('#login-button').click()
    //Using XPath
    await page.locator('//input[@name="password"]').fill('Shaaf')
    //Using Text 
    await page.locator('text=LOGIN').click()
})