# last-redirect
A shortcut function to return summary details of last URL redirect in a chain.

For use with the [Puppeteer](https://github.com/puppeteer/puppeteer) Node library for Chromium web browser automation.

## Usage

Incorporate the function into a Puppeteer script. E.g.

```javascript
const puppeteer = require('puppeteer');
const lastRedirect = require('last-redirect');

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage()
  const res = await page.goto('http://www.google.com', { waitUntil: 'networkidle2' })
  console.log(lastRedirect(res));
  await browser.close()
})()

```

### Expected result

```javascript
{ count: 1, status: 302, statusText: 'Found' }
```