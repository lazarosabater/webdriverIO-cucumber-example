class EbayProductsList {

    constructor(){
        this.itemFilter = '.s-item.s-item__pl-on-bottom';
    }

// Se obtiene la cantidad de items en pantalla y se imprimen en consola
    async checkItems (wordFilter) {
        const items = await browser.$$(this.itemFilter);
        console.log('--------------------------------- '+items.length);
     }
     
}

module.exports = new EbayProductsList();