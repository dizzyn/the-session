import { Page, Browser } from "playwright";
import * as playwright from "playwright";

it("Call to action present", async function () {
  const browser = await playwright["chromium"].launch({});
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> "Pošli prachy"', { timeout: 4000 });
  await browser.close();
});

it("Recive uppercase", async function () {
  const browser: Browser = await playwright["chromium"].launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto("http://localhost:3000/");
  await page.type("#input", "Babička");
  await page.click("#submitBtn");
  await page.waitForSelector(`"BABIČKA"`);
  await browser.close();
});
