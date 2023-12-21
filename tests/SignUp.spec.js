import { test } from '@playwright/test'
import { SignUp } from '../Pages/Signup'

test('Sign Up', async ({ page, browser }) => {
  const signup = new SignUp(page, browser)
  await signup.gotopage()
  await signup.createaccount('Mansoor', 'QA', 'testallivet@gmail.com', 'Test@123')
})