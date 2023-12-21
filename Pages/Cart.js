export class Cart{
    constructor(page){
        this.page = page
        this.checkout = '#checkout'
        this.firstname = '#first-name'
        this.lastname = '#last-name'
        this.zip = '#postal-code'
        this.continueBtn = '#continue'
        this.FinishBtn = '#finish'
        this.BackBtn = '#back-to-products'
    }

    async Checkout(F_Name , L_Name, Zip){
        await this.page.locator(this.checkout).click()
        await this.page.locator(this.firstname).fill(F_Name)
        await this.page.locator(this.lastname).fill(L_Name)
        await this.page.locator(this.zip).fill(Zip)
        await this.page.locator(this.continueBtn).click()
        await this.page.locator(this.FinishBtn).click()
        await this.page.locator(this.BackBtn).click()
    }
}