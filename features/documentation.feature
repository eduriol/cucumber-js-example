Feature: Example feature
  As a user of Google
  I want to find results on Cucumber
  So that I can find the best possible documentation

  Scenario: Finding Cucumber's website
    Given I am on the Google homepage
    When I search for "Selenium"
    Then I should see "Selenium - Web Browser Automation"
