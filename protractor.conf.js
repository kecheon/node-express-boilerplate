exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.spec.e2e.js'],
  onPrepare: function() {
    // Override the timeout for webdriver.
    browser.manage().timeouts().setScriptTimeout(60000);
  }
};
