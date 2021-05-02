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

  // await browser.close();
})();
