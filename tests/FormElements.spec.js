import {test} from '@playwright/test'

test('Form Elements', async({page}) => {
    await page.goto('https://adminlte.io/themes/v3/index3.html')
    await page.pause()
    await page.locator('.nav-icon.fas.fa-edit').click()
    await page.locator().click()
})