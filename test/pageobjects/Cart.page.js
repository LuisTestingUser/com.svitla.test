class CartPage{

    get header () {
        return  $('//span[@data-test="title"]')
    }

    get checkoutBttn() {
        return $('#checkout')
    }

}

export default new CartPage();