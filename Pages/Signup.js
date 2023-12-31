
import {chromium} from '@playwright/test'
export class SignUp {
    constructor(page) {
        this.page=page
        this.sfcc
        this.Fnamefield = '#registration-form-fname'
        this.Lnamefield = '#registration-form-lname'
        this.Emailfield = '#registration-form-email'
        this.Passwordfield = '#registration-form-password'
        this.Rpasswordfield = '#registration-form-password-confirm'
        this.CreateAcntBtn = '.btn.btn-block.btn-primary.registration-btn'
    }

    async gotosfcc() {
        const browser = await chromium.launch()
        const context = await browser.newContext({
            httpCredentials: {
              username: 'storefront',
              password: 'KATUjwEny4Nya29u',
            }  
        })
        this.sfcc= await context.newPage()
    await this.sfcc.goto('https://sfcc.petfoodking.com/signin')
    }
    async gotopage() {
    await this.page.goto('https://www.google.com')
    }

    async createaccount(FName, LName, Email, Pass) {
        if (!FName || !LName || !Email || !Pass) {
            throw new Error('All fields must be filled')
        }

        const emailassert = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailassert.test(Email)) {
            throw new Error('Invalid email format')
        }

        const passwordassert = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/
        if (!passwordassert.test(Pass)) {
            throw new Error('Password must have at least 4 characters, including one uppercase letter, one lowercase letter, one number, and one special character.')
        }


        await this.sfcc.locator(this.Fnamefield).fill(FName)
        await this.sfcc.locator(this.Lnamefield).fill(LName)
        await this.sfcc.locator(this.Emailfield).fill(Email)
        await this.sfcc.locator(this.Passwordfield).fill(Pass)
        await this.sfcc.locator(this.Rpasswordfield).fill(Pass)
        await this.sfcc.locator(this.CreateAcntBtn).click()
    }
}