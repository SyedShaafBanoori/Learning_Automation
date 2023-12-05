import {test, expect} from '@playwright/test'

//Site 01
test ('Demo Login Script 01', async ({page}) => {
    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.locator('[placeholder="Enter your username"]').click()
    await page.locator('[placeholder="Enter your username"]').fill('Shaaf')
    await page.locator('[placeholder="Enter your password"]').click()
    await page.locator('[placeholder="Enter your password"]').fill('12345')

    await page.waitForSelector('text=Sign in', {timeout: 5000}) //Assertion for time
    await page.locator('text=Sign in').click()
})

//Site 02
test ('Demo Login Script 02', async ({page}) => {
    await page.goto('https://www.workbox.pk/hrm/symfony/web/index.php/dashboard')
    await page.pause()
    await page.locator('#txtUsername').click()
    await page.locator('#txtUsername').fill('syedshaaf')
    await page.locator('#txtPassword').click()
    await page.locator('#txtPassword').fill('(maVz1!8F/^0')
    await page.getByRole('button', { name: 'LOGIN', exact: true }).click()
    await page.waitForURL('https://www.workbox.pk/hrm/symfony/web/index.php/dashboard')
    await page.getByRole('link', { name: 'Welcome Syed Shaaf' }).click()
    await page.locator('text=Logout').click()
    await page.waitForURL('https://www.workbox.pk/hrm/symfony/web/index.php/auth/login')
})

//Site 03
test.only('Demo Login Script 03', async ({page}) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
    await page.getByLabel('Email:').fill('admin@yourstore.com')
    await page.getByLabel('Password:').fill('admin')
    await page.getByRole('button', { name: 'Log in' }).click()
    await page.waitForURL('https://admin-demo.nopcommerce.com/admin/')
    await page.getByRole('link', { name: 'Logout' }).click()
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
})