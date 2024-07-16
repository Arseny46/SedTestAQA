module.exports = {
  '@tags': ['group1'],
  before(browser) {
    browser
      .page.mainPage()
      .navigate()
      .waitForElementVisible("@welcomeCatalog", "Каталог отображается");
  },

  after(browser) {
    browser.end();
  },

  'Check Search': function (browser) {
    const itemName = "Супер яблоко";
    const word = browser.globals.itemName;
    browser.page.mainPage()
      .search(word)
    browser.useXpath()
      .waitForElementVisible(`//div[@class="card ml-1 mr-1 mt-2" and contains(., '${word}')]`);
    browser
      .assert.urlContains(encodeURI('search=Супер+яблоко'));
    browser
      .assert.titleContains("TestGym", 'title ok');
  },

  'Check Inner Search': function (browser) {
    const secondItemName = "Ручка Паркер";
    browser
      .page.mainPage()
      .search(secondItemName)
    browser.useXpath()
      .waitForElementVisible(`//div[@class="card ml-1 mr-1 mt-2" and contains(., '${secondItemName}')]`, 'Искомая карточка найдена')
      .assert.textContains(`//div[@class="card ml-1 mr-1 mt-2" and contains(., '${secondItemName}')]`, secondItemName, 'Текст в искомой карточке найден')
    browser
      .assert.urlContains(encodeURI('search=Ручка+Паркер'));
    browser.page.mainPage()
      .assert.titleContains('TestGym', 'title ok');
  },

  'Cart Click': function (browser) {
    const secondItemName = "Ручка Паркер";
    browser
      .page.mainPage()
      .search(secondItemName)
    browser.useXpath()
      .strictClick("//a[@href = '/mycart/']");
    browser.useXpath()
      .assert.textContains("//h3", "Ваша корзина", 'Ваша корзина ОК')
  },
};