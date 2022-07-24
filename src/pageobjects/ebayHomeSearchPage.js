
class EbayHomeSearch {

    constructor(){
        this.searcherEbay = '#gh-ac';
    }

// En el buscador de productos de ebay se interta un texto y da Enter    
    async searchEbayText (searchText) {
       await browser.$(this.searcherEbay).setValue(searchText);
       await browser.keys('Enter');
    }
   
  }

module.exports = new EbayHomeSearch();
