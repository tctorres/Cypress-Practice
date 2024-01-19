@Smoke

Feature: Purchase Flow
  Background:
    Given I visit the Home Page

    Scenario: Search Phone By Category
      When I choose the category 'Phones'
      Then The item SamsungGS6 is visible

    Scenario: Product Selection
      When I choose the category 'Monitors'
      When I select the item 'AsusMonitor'
      Then The item "addToCart" is visible

    Scenario: Add Product To Cart
      When I select the item 'SonyVaioi5'
      And I click on "Add to cart" the item 'SonyVaioi5'
      Then The item "addToCart" is visible

    Scenario: Delete Item And Buy The Cart
      When I select the item 'SonyVaioi5'
      When I click to navigate to 'Cart'
      And I click on delete the item 'SonyVaioi5'
      And I click to buy my items
      And I start to fill my personal data in the blanks
      Then I receive a confirmation of my purchase and click on it

