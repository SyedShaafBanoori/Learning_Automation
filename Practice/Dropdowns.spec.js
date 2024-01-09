import {expect, test} from '@playwright/test'

test('Handling Dropdowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Selecting multiple options from the dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    //Assertions
    //Check number of options in the dropdown
    const options= await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    //Using JS array
    const Options = await page.$$('#colors option')
    await expect(Options.length).toBe(5) 

    //Checking presence of value in the dropdown
    const content= await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(5000)
})