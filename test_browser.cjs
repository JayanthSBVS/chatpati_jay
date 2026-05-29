const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 10000 });
    console.log("Page loaded successfully.");
    
    // Check if ACT I is in the DOM
    const act1 = await page.$('div.h-\\[1000vh\\]');
    console.log("ACT I container found:", !!act1);
    
    // Dump body innerHTML length
    const bodyLength = await page.evaluate(() => document.body.innerHTML.length);
    console.log("Body length:", bodyLength);

  } catch (err) {
    console.log("Navigation error:", err);
  }

  await browser.close();
})();
