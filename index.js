const puppeteer = require("puppeteer");
const { writeText } = require("./utils");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.lemonde.fr");
  //await page.screenshot({ path: "example.png" });

  await page.waitForTimeout(5000);

  await writeText("voilà du beau json");

  await browser.close();
})();
