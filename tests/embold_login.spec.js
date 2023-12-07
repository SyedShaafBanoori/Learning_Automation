const {
  test,
  expect
} = require('@playwright/test')
// import { test, expect } from '@playwright/test';

test('Embold Login Script', async ({
  page
}) => {
  await page.goto('https://staging.embold.co/login');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('dH&Q80D6=N9z');
  await page.getByRole('button', {
    name: 'Submit'
  }).click();
  await page.getByPlaceholder('email').click();
  await page.getByPlaceholder('email').fill('inf-new49@yopmail.com');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('#Loler123');
  await page.getByRole('button', {
    name: 'Sign In'
  }).click();
  await page.getByText('Log Out').click();
})