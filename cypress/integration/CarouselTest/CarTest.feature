@Smoke
Feature: Manage Carousel Steps
  Background:
    Given I visit the Home Page

  Scenario: Move from first slide to second slide with the arrow
    When I click on the right arrow of the carousel to see the 'second' image
    Then The carousel image changes to the image #'2'

  Scenario: Move from first slide to third slide with the arrow
    When I click on the left arrow of the carousel to see the 'third' image
    Then The carousel image changes to the image #'3'

  Scenario: Move to the third slide using indicators
    When I click on the indicator #'3' of the carousel
    Then The carousel image changes to the image #'3'

