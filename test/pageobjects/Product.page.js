import fetch from 'node-fetch';
class productPage  {

    get header() {
        return  $('//span[@data-test="title"]')
    }

    get productElements (){
        return $$('//button[contains(@data-test, "add-to-cart-")]');
    }

    get cartElement() {
      return $('[data-test="shopping-cart-link"]')

    }

    get cartBadge() {
      return $('[data-test="shopping-cart-badge"]')
      
    }

    get imagesElements(){
      return  $$('//div[@class="inventory_item_img"]/a/img')
    }

    async checkImages() {
      const images = await this.imagesElements;
      const baseUrl = "https://www.saucedemo.com"
      for (const image of images) {
        const imageUrl = await image.getAttribute('src');
        console.log("Imagen",imageUrl)
        const fullImageUrl = baseUrl + imageUrl;
        try {
          const response = await fetch(fullImageUrl);
    
          if (response.ok) {
            console.log(`${fullImageUrl} is not broken.`);
          } else {
            console.error(`${fullImageUrl} is broken (status: ${response.status}).`);
          }
        } catch (error) {
          console.error(`Error fetching image ${fullImageUrl}: ${error.message}`);
        }
      }
  }
  
    async AddToCartNElements(n) {
        for (let i = 0; i < n; i++) {
           this.productElements[i].click();
        }
      }
}
export default new productPage();