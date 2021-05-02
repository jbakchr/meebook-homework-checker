require("dotenv").config();
const puppeteer = require("puppeteer");

(async () => {
  // Go to login page
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://app.meebook.com/foraeldre/1");

  // Click login button
  const btnSelector =
    "body > div.portal-frontpage > div > div.portal-frontpage__main-content > div > div:nth-child(2) > div > div:nth-child(1) > div > a > span";
  await page.waitForSelector(btnSelector);
  await page.click(btnSelector);

  // Submit username
  const usernameSelector = "#username";
  const submitSelector = "body > main > div > div > form > nav > button";
  await page.waitForTimeout(2000);
  await page.type(usernameSelector, process.env.USERNAME, { delay: 250 });
  await page.click(submitSelector);

  // Submit password
  await page.type("#form-error", process.env.PASSWORD, { delay: 250 });
  await page.click(
    "body > main > div > div > form > nav > div > div.col-7.col-sm-8.col-md-7.col-lg-7.order-2 > button"
  );

  // await browser.close();
})();
