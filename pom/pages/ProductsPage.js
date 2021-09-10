import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.mainTitle = Selector('.title').withText('PRODUCTS')
    }

}

export default new ProductsPage