
class GoogleSearch {

    constructor(){
        this.searcherGoogle = 'input[name="q"]';
        this.pageFilter = '//span[@data-dtld=\"ebay.com\"]';
    }
//En el buscador de google se interta un texto y se da Enter
    async searchGoogleText (sendText) {
       await browser.$(this.searcherGoogle).setValue(sendText);
       await browser.keys('Enter');
    }

// Se da click en el resultado que coincide con "ebay.com". (No siempre el primer resultado de la busqueda coincide con "ebay.com")
    async selectFirstResult () {
       await browser.$(this.pageFilter).click();
    }

// Se verifica que la pagina contenga la palabra clave "ebay" 
    async resultCheck (wordFilter) {
        await expect(browser).toHaveUrlContaining(wordFilter);
     }
     
}

module.exports = new GoogleSearch();
