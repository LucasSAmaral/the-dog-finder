// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header__title')
      .assert.containsText('h1', 'The Dog Finder')
      .assert.elementCount('h1', 1)
      .waitForElementVisible('a.button6', 3000)
      .click('a.button6')
      .waitForElementVisible('#back', 3000)
      .click('#back')
      .waitForElementVisible('a.button16', 3000)
      .click('a.button16')
      .waitForElementVisible('#back', 3000)
      .click('#back')
      .waitForElementVisible('a.button81', 3000)
      .click('a.button81')
      .waitForElementVisible('#back', 3000)
      .click('#back')
      .waitForElementVisible('a.button121', 3000)
      .click('a.button121')
      .waitForElementVisible('#back', 3000)
      .click('#back')
      .waitForElementVisible('.header__title', 3000)
      .end()
  }
}
