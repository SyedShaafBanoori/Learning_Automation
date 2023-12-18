export class Home {
    constructor(page) {
        this.page = page
        this.productlist = '.inventory_list >div'
        this.cartbutton = '.btn.btn_primary.btn_small.btn_inventory'
        this.cart = '#shopping_cart_container'
    }

    async addproduct(productname) {
        const count= await this.page.locator(this.productlist).count()
        for(let i=0; i<=count; i++){
            const productlist1=await this.page.locator(this.productlist)
            if(productname === (await productlist1.nth(i).locator('div div a div').textContent()))
            {
                await this.page.locator(this.productlist).nth(i).locator('button').click()
                break
            } 
        }
        // const productlist = await this.page.$$(this.productlist)
        // for (const product of productlist) {
        //     if (productname === await product.nth(i).textContent()) {
        //         await product.click()
        //         break
        //     }
        // }
        
    }

    async gotocart() {
        await this.page.locator(this.cart).click()
    }

}