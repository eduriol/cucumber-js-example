var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('I am on the Google homepage', function() {
    this.driver.get('https://www.google.com');
  });

  When('I search for "{termToSearch}"', function (text) {
    this.driver.findElement({name: 'q'}).sendKeys(text);
    this.driver.findElement({name: 'btnG'}).click();
  });

  Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});
