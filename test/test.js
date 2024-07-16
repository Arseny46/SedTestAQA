const webdriver = require('selenium-webdriver');
require('chromedriver');
const driver = new webdriver.Builder()
  // настройки - используем браузер хром
  .withCapabilities({'browserName': 'chrome'})
  // создание объекта для работы с браузером
  .build();
//открываем
driver.get('http://testshop.sedtest-school.ru/');
// находим все ссылки
let referenceCount = 5;
driver.findElements(webdriver.By.xpath("//a[@class = 'text-info']"))
  .then(function (links) {
    if (links.length === referenceCount) {
      console.log("PASSED");
    } else {
      console.log("FAILED");
      console.log("Ожидаемое количество товаров: ", referenceCount, "\nТоваров обнаружено: ", links.length);
    }
    driver.quit();
  });