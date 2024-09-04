import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Login.page.js'
import   constants from '../data/Constants.js'
import ProductPage from '../pageobjects/Product.page.js'
import CartPage from '../pageobjects/Cart.page.js'
import CheckoutInfoPage from '../pageobjects/CheckoutInfo.page.js'
import CheckoutOverviewPage from '../pageobjects/CheckoutOverview.page.js'
import actions from '../utils/Actions.js'
import CheckoutCompletePage from '../pageobjects/CheckoutComplete.page.js'

describe('E2E Test SVITLA', () => {
    it('trying to login with invalid credentials', async () => {
        await LoginPage.open()
        //await browser.maximizeWindow();
        await LoginPage.login(constants.LOGIN_CREDENTIALS.INVALID_USERNAME, constants.LOGIN_CREDENTIALS.VALID_PASSWORD)
        await expect(LoginPage.error).toHaveText(constants.ERROR_MESSAGES.INVALID_CREDENTIALS)
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(constants.LOGIN_CREDENTIALS.VALID_USERNAME, constants.LOGIN_CREDENTIALS.VALID_PASSWORD )   
    })

    it('Navigate to Product Page and confirm elements are displayed correctly', async () => {
        await expect(ProductPage.header).toHaveText(constants.PAGE_HEADING.PRODUCT_PAGE)
         await ProductPage.checkImages()
       
    })

    it('Add Prodcuts to cart and verify count', async () => {
        const numberOfProductsToAdd = constants.NUMBER_OF_PRODUCT_TOBEADDED_CART.four;
        await ProductPage.AddToCartNElements(numberOfProductsToAdd)

        const actualCartItemCount = await ProductPage.cartBadge.getText();
        await expect(actualCartItemCount).toBe(numberOfProductsToAdd.toString());

    })


    it('Go Checkout Process and Verify Message', async () => {
        await ProductPage.cartElement.click();

        await expect(CartPage.header).toHaveText(constants.PAGE_HEADING.CART_PAGE)
        await CartPage.checkoutBttn.click();

        await expect(CheckoutInfoPage.header).toHaveText(constants.PAGE_HEADING.CHECK_OUT_INFO)
        await CheckoutInfoPage.setCheckOutInfo(
            constants.CHECK_OUT_INFORMATION.FIRST_NAME,
            constants.CHECK_OUT_INFORMATION.LAST_NAME,
            constants.CHECK_OUT_INFORMATION.POSTAL_CODE)
        
        await expect(CheckoutOverviewPage.header).toHaveText(constants.PAGE_HEADING.CHECK_OUT_OVERVIEW)
        actions.scrollintoElement(CheckoutOverviewPage.finishBttn)
        CheckoutOverviewPage.finishBttn.click();

        await expect(CheckoutCompletePage.header).toHaveText(constants.PAGE_HEADING.CHECK_OUT_COMPLETE)
        await expect(CheckoutCompletePage.confirmationMessage).toHaveText(constants.CHECK_OUT_CONFIRMATION_MESSAGES.CONFIRMATION_MESSAGE)
    })

})

