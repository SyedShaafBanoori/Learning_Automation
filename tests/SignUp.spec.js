import { test} from '@playwright/test'
import { SignUp } from '../Pages/Signup'

 
test('Sign Up', async () => {
  const signup = new SignUp()
  await signup.gotosfcc()
  await signup.createaccount('Mansoor', 'QA', 'testallivet@gmail.com', 'Test@123')
  
});
test('1 Up', async ({page}) => {
  const signup = new SignUp(page)
  await signup.gotopage()
  
})
