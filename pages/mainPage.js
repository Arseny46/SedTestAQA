const {browser} = require("nightwatch");
const pageCommands = {
  search(word) {
    this
      .setValue('@searchBar', word)
      .sendKeys('@searchBar', browser.Keys.ENTER)
    return this;
  }
};

module.exports = {
  url: 'http://testshop.sedtest-school.ru/',
  commands: [pageCommands],
  elements: {
    welcomeCatalog: {
      selector: "//h4[contains(text(), 'Каталог')]",
      locateStrategy: "xpath"
    },
    searchBar: {
      selector: "//input[@name='search' and contains(@placeholder, 'Поиск')]",
      locateStrategy: "xpath"
    }
  }
};
