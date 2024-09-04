class Actions {

        async scrollintoElement (element) {
          await element.scrollIntoView();
        }
}

export default new Actions();
