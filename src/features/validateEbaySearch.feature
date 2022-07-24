Feature: Validate list of items displayed in eBay

  Scenario: As a user, I can validate amount of items
            displayed in eBay

    Given I am on Google page
    When I search for text ebay and click enter
    And I click on the first result
    Then I should see url contain ebay
    When I enter on search box pilas
    Then I should validate the results of the search

