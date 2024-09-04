class CheckoutCompletePage {

    get header () {
        return  $('//span[@data-test="title"]')
    }

    get confirmationMessage (){
        return $('h2*=Thank you for your order!')

    }

}

export default new CheckoutCompletePage();
