import {test, expect, chromium} from '@playwright/test'
let page
let browser

test.beforeAll(async()=>{
browser=await chromium.launch()
page= await browser.newPage()
})

test.beforeEach( async() => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
})

test.afterAll(async() => {
    await page.close()
})

test('Hooks and Groups Practice', async() => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('a').filter({ hasText: '3' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Shaaf');
    await page.locator('[data-test="lastName"]').fill('Banoori');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
})

test('Log Out', async () => {
    await page.locator('text=Open Menu').click()
    await page.locator('text=LogOut').click()
    await page.waitForURL('https://www.saucedemo.com/')
})