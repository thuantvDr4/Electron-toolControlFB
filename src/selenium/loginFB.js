/* eslint-disable no-restricted-syntax */
// selenium
const { Builder, By, Key, until } = require('selenium-webdriver');

//
async function loginFB(user) {
  //
  // selenium
  const driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.facebook.com/');
    // email
    try {
      await driver.findElement(By.name('email')).sendKeys(user.email);
    } catch (err) {
      console.log(err);
    }
    //
    await driver.sleep(500);
    // pass
    try {
      await driver.findElement(By.id('pass')).sendKeys(user.pass);
    } catch (err) {
      console.log(err);
    }
    //
    await driver.sleep(500);
    // login
    try {
      await driver
        .findElement(
          By.xpath(
            '/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button'
          )
        )
        .click();
    } catch (err) {
      console.log(err);
    }
    //
    await driver.sleep(5000);
    // da login roi -->get info
    // get cookie
    const cookies = await driver.manage().getCookies();
    driver.close();
    //
    const driver1 = new Builder().forBrowser('chrome').build();
    try {
      await driver1.get('https://www.facebook.com/');
      //
      for (const cookie of cookies) {
        // eslint-disable-next-line no-await-in-loop
        await driver1.manage().addCookie(cookie);
        //
      }
      await driver1.sleep(500);
      driver1.navigate().refresh();
    } catch (err) {
      console.log(err);
    }
    //
  } catch (err) {
    console.log(err);
  }
}

//
module.exports = { loginFB };
