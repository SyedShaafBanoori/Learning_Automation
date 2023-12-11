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
    // await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(6) option:nth-child(1)').click()
    // await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(7) option:nth-child(2)').click()
    // await page.locator('.card.card-primary > div:nth-child(2) > div:nth-child(8) option:nth-child(3)').click()
})

test('General Elements', async() => {
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
    expect(await page.locator('form:nth-child(1)>div:nth-child(6)>div:nth-child(2)>div>div:nth-child(1)>input').isChecked()).toBeFalsy;
    expect(await page.locator('form:nth-child(1)>div:nth-child(6)>div:nth-child(2)>div>div:nth-child(2)>input').isChecked()).toBeTruthy;
    expect(await page.locator('form:nth-child(1)>div:nth-child(6)>div:nth-child(2)>div>div:nth-child(3)>input')).toHaveAttribute('disabled')    
    //Select Options
    await page.selectOption('form>div:nth-child(7)>div:nth-child(1)>div>select', 'option 4') 
    expect(await page.locator('form>div:nth-child(7)>div:nth-child(2)>div>select')).toBeDisabled()
    await page.selectOption('form>div:nth-child(8)>div:nth-child(1)>div>select', 'option 3')
    expect(await page.locator('form>div:nth-child(8)>div:nth-child(2)>div>select')).toBeDisabled()
})

test('Input Addon', async() => {
    await page.locator('div:nth-child(3)>div.card-body>div:nth-child(1)>input').fill('TestName')
    await page.locator('div:nth-child(3)>div.card-body>div:nth-child(2)>input').fill('100')
    await page.locator('div:nth-child(3)>div.card-body>div:nth-child(3)>input').fill('100')
    //With Icons
    await page.locator('div:nth-child(3)>div>div:nth-child(5)>input').fill('Test@gmail.com')
    await page.locator('div:nth-child(3)>div>div:nth-child(6)>input').fill('Correct')
    await page.locator('div:nth-child(3)>div>div:nth-child(7)>input').fill('100')
    //With Checkbox and Radio Inputs
    await page.locator('div:nth-child(3)>div>div>div:nth-child(1)>div>div>span>input').check()
    await page.locator('div:nth-child(3)>div>div>div:nth-child(1)>div>input').fill('Checkbox')
    await page.locator('div:nth-child(3)>div>div>div:nth-child(2)>div>div>span>input').click()
    await page.locator('div:nth-child(3)>div>div>div:nth-child(2)>div>input').fill('Radio Button')
    //With Buttons
    await page.locator('.input-group.input-group-lg.mb-3>div>button').click()
    await page.locator('.input-group.input-group-lg.mb-3>div>ul').click()
    await page.locator('.input-group.input-group-lg.mb-3>input').fill('Action')
    await page.locator('div:nth-child(3)>div>div:nth-child(14)>input').fill('Action')
    await page.locator('div:nth-child(3)>div>div.input-group.input-group-sm>input').fill('Action')
    await page.locator('.input-group.input-group-sm>span>button').click()
})

test('Custom Elements', async() => {
    //Checkboxes
    // expect(await page.locator('.col-md-6>div:nth-child(4)>div:nth-child(2)>form>div>div:nth-child(1)>div>div:nth-child(1)>#customCheckbox1')).not.toBeChecked()
    // expect(await page.locator('.col-md-6>div:nth-child(4)>div:nth-child(2)>form>div>div:nth-child(1)>div>div:nth-child(2)>#customCheckbox2')).toBeChecked()
    // expect(await page.locator('.col-md-6>div:nth-child(4)>div:nth-child(2)>form>div>div:nth-child(1)>div>div:nth-child(3)>#customCheckbox3')).toBeDisabled()
    // expect(await page.locator('form>div>div:nth-child(1)>div>div:nth-child(4)>input')).toBeChecked()
    // expect(await page.locator('form>div>div:nth-child(1)>div>div:nth-child(5)>input')).toBeChecked()
    //Radio Buttons
    // expect(await page.locator('').isChecked()).toBeFalsy;
    // expect(await page.locator('').isChecked()).toBeTruthy;
    // expect(await page.locator('')).toHaveAttribute('disabled')
})