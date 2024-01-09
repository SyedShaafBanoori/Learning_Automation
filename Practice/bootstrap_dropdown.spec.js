import {expect, test} from '@playwright/test'

test('Bootstrap Dropdown', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click()

    //Assertions
    const options= await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    const Options = await page.$$('ul>li label input')
    await expect(Options.length).toBe(11)

    //Select Options from dropdown
    const select = await page.$$('ul>li label input')
    for(let option of select)
    {
        const value = await option.textContent()
        // console.log("Value is", value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }
    }

    //Deselect Options
    const deselect = await page.$$('ul>li label input')
    for(let option of deselect)
    {
        const value = await option.textContent()
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click()
        }
    }

    await page.waitForTimeout(5000)
})