export class SignUp {
    constructor(page,browser) {
        this.browser=browser
        this.page=page
        this.Fnamefield = '#registration-form-fname'
        this.Lnamefield = '#registration-form-lname'
        this.Emailfield = '#registration-form-email'
        this.Passwordfield = '#registration-form-password'
        this.Rpasswordfield = '#registration-form-password-confirm'
        this.CreateAcntBtn = '.btn.btn-block.btn-primary.registration-btn'
    }

    async gotopage() {
        const context1 = await this.browser.newContext({
            httpCredentials: {
              username: 'storefront',
              password: 'KATUjwEny4Nya29u',
            }  
        })
    this.page = await context1.newPage()
    await this.page.goto('https://sfcc.petfoodking.com/signin')
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


        await this.page.locator(this.Fnamefield).fill(FName)
        await this.page.locator(this.Lnamefield).fill(LName)
        await this.page.locator(this.Emailfield).fill(Email)
        await this.page.locator(this.Passwordfield).fill(Pass)
        await this.page.locator(this.Rpasswordfield).fill(Pass)
        await this.page.locator(this.CreateAcntBtn).click()
    }
}