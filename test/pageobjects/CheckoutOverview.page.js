class CheckoutOverviewPage {

    get header () {
        return  $('//span[@data-test="title"]')
    }

    get finishBttn(){
        return $('#finish')
    }


}

export default new CheckoutOverviewPage();