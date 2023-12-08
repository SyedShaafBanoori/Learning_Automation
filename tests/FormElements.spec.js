import {test, expect, chromium} from '@playwright/test'
let page;
let browser;

//GENERAL FORM
test.beforeAll(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
})

test.beforeEach(async () => {
    await page.goto('https://adminlte.io/themes/v3/index3.html')
    await page.locator('.nav-icon.fas.fa-edit').click()
    await page.locator('.mt-2 >ul > li:nth-child(6) > ul > li:nth-child(1)').click()
    await page.waitForURL('https://adminlte.io/themes/v3/pages/forms/general.html')
})

test('Quick Example', async() => {
    await page.locator('.card-body:nth-child(1) > div:nth-child(1) > input').fill('TestEmail@gmail.com')
    await page.locator('.card-body:nth-child(1) > div:nth-child(2) > input').fill('TestPassword123#')
    await page.locator('.card-body > div:nth-child(3) > div div > .custom-file-input').click()
    await page.locator('.card-body > div:nth-child(3) > div div > .custom-file-input').setInputFiles('Muntazim.docx')
    await page.locator('.card-body > div:nth-child(3) > div > .input-group-append').click()
    await page.locator('.card-body > div:nth-child(4) > .form-check-label').check()
    await page.locator('.card-footer > .btn.btn-primary').click()
})

test('Different Height', async() => {
    await page.locator('.col-md-6 > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').fill('10')
    await page.locator('.col-md-6 > div:nth-child(1) > div:nth-child(2) > input:nth-child(3)').fill('20')
    await page.locator('.col-md-6 > div:nth-child(1) > div:nth-child(2) > input:nth-child(5)').fill('30')
})

test('Different Width', async() => {
    await page.locator('.card.card-danger > div:nth-child(2) > div > .col-3 > input').fill('10')
    await page.locator('.card.card-danger > div:nth-child(2) > div > .col-4 > input').fill('20')
    await page.locator('.card.card-danger > div:nth-child(2) > div > .col-5 > input').fill('30')
})

test('Different Styles', async() => {
    //Input
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(2) > input').fill('10')
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(3) > input').fill('10')
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(4) > input').fill('10')
    //Custom Select
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(6) option:nth-child(1)').click
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(7) option:nth-child(2)').click
    await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(8) option:nth-child(3)').click
})

test.only('General Elements', async() => {
    // Text Enabled & Disabled
    await expect(page.locator('form:nth-child(1) > div > div:nth-child(1) > div > input')).toBeEnabled()
    await expect(page.locator('form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > input')).toBeDisabled()
    await expect(page.locator('form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > textarea')).toBeEnabled()
    await expect(page.locator('form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > textarea')).toBeDisabled()
    //Success, Warning and Error Fields
    await page.locator('form > div:nth-child(3) > input').fill('Success')
    await page.locator('form > div:nth-child(4) > input').fill('Warning')
    await page.locator('form > div:nth-child(5) > input').fill('Error')
    //Checkboxes
    await expect(page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(1) > input ')).not.toBeChecked()
    await expect(page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(2) > input ')).toBeChecked()
    await expect(page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div > div:nth-child(3) > input ')).toBeDisabled()
    //Radio Buttons
    expect(await page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(1) > input ').isChecked()).toBeFalsy;
    expect(await page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(2) > input ').isChecked()).toBeTruthy;
    expect (await page.locator('form:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(3) > input')).toHaveAttribute('disabled')    
})