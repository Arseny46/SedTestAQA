module.exports = {
  'Catalog heading test': function (browser) {
    browser
      .url('http://testshop.sedtest-school.ru/')
      .assert.titleEquals('TestGym');
    browser.expect.element('h4').text.to.equal('Каталог');
    browser.end();
    let regex = /^[a-z0-9]{1,100}\.[a-z0-9]{1,100}@[a-z]{1,10}\.com$/;
  }
};
