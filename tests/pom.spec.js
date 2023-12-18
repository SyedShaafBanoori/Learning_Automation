import {test, expect} from '@playwright/test'
import { Login } from '../POM/Login'
import { Home } from '../POM/Home'
import { Cart } from '../POM/Cart'

test('POM', async({page}) => {

//Login
const login = new Login(page)
await login.gotologinpage()
await login.login('visual_user','secret_sauce')
await page.waitForURL('https://www.saucedemo.com/inventory.html')

//Home
const home = new Home(page)
await home.addproduct('Sauce Labs Onesie')
await home.gotocart()

//Cart
const cart = new Cart(page)
await cart.Checkout('SQA' , 'Tester', '00000' )
// await page.pause()
})