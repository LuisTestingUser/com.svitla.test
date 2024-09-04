class CheckoutInfoPage {

    get header () {
        return  $('//span[@data-test="title"]')
    }

    get firstName(){
        return $('#first-name')
    }

    get lastName(){
        return $('#last-name')
    }

    get postalCode(){
        return $('#postal-code')
    }

    get continueBttn(){
        return $('#continue')
    }

    async setCheckOutInfo (firstname, lastname, postalcode) {
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.postalCode.setValue(postalcode);
        await this.continueBttn.click();
    }

}


export default new CheckoutInfoPage();