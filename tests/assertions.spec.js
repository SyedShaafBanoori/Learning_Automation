import {
    test,
    expect
} from '@playwright/test'

test('Assertions Practice', async ({
    page
}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    //Check if the element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

    //Check if element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //Check if element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //Check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The Room')

    //Check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')

    //Check page URL and Title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')

    //Visual validation with scrteenshot
    await expect(page).toHaveScreenshot()
})