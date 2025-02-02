Feature: Login functionality
  Scenario: User logs in with empty credentials
    Given User is located on the main page of saucedemo website
    When User click "Login" button
    Then User should see "Epic sadface: Username is required" error message