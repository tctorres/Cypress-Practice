@Smoke
Feature: Navigate All Header Links
  Background:
    Given I visit the Home Page

    Scenario: Visit Contact Modal
      When I click to navigate to 'Contact'
      Then The page displayed is 'Contact'

    Scenario: Visit About Us Modal
      When I click to navigate to 'About us'
      Then The page displayed is 'About us'

    Scenario: Visit Cart Page
      When I click to navigate to 'Cart'
      Then The page displayed is 'Cart'

    Scenario: Visit Log In Modal
      When I click to navigate to 'Log in'
      Then The page displayed is 'Log in'

    Scenario: Visit Sign Up Modal
      When I click to navigate to 'Sign up'
      Then The page displayed is 'Sign up'