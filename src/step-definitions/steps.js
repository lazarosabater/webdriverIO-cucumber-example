const { Given, When, Then} = require('@wdio/cucumber-framework');
const GoogleSearch = require('../pageobjects/googleHomeSearchPage.js');
const EbayHomeSearch = require('../pageobjects/ebayHomeSearchPage.js');  
const EbayProductsList = require('../pageobjects/ebayProductsListPage.js'); 

Given(/^I am on Google page$/, async () => {
    await browser.url(`${browser.options.baseUrl}`);
});

When(/^I search for text (\w+) and click enter$/, async (sendGoogleText) => {
    await GoogleSearch.searchGoogleText(sendGoogleText);

});

When(/^I click on the first result$/, async () => {
    await GoogleSearch.selectFirstResult();
});

Then(/^I should see url contain (\w+)$/, async (wordFilter) => {
    await GoogleSearch.resultCheck(wordFilter);
});


When(/^I enter on search box (\w+)$/, async (lookForItem) => {
    await EbayHomeSearch.searchEbayText(lookForItem);
});

Then(/^I should validate the results of the search$/, async () => {
    await EbayProductsList.checkItems();

});
