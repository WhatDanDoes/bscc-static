const PORT = 8080;
const APP_URL = `http://localhost:${PORT}`;

const puppeteer = require('puppeteer');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;

describe('contact form', () => {

  let puppetBrowser, page;
  beforeEach(async () => {
    try {
      puppetBrowser = await puppeteer.launch({
        args: [
          '--disable-web-security',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials'
        ],
        headless: true,
        executablePath: puppeteer.executablePath(),
        //slowMo: 100
      });
      page = await puppetBrowser.newPage();
      page.on('console', msg => console.log('PAGE LOG:', msg.text().toString()));

      // Some of these take a while. Disable timeout
      page.setDefaultNavigationTimeout(0);

      await page.goto(APP_URL);
    } catch (e) {
      console.log(e);
    }
  });

  afterEach(async () => {
    await puppetBrowser.close();
  });

  it('has the appropriate input fields', async () => {
    let formInputs = await page.$$('#contact form input');
    expect(formInputs.length).toEqual(2);
    expect(await formInputs[0].evaluate(el => el.getAttribute('name'))).toEqual('name');
    expect(await formInputs[1].evaluate(el => el.getAttribute('name'))).toEqual('email');

    let formTextArea = await page.$('#contact form textarea');
    expect(await formTextArea.evaluate(el => el.getAttribute('name'))).toEqual('message');
  });

  describe('submission', () => {

    beforeEach(async () => {
      await page.setRequestInterception(true);

      page.on('request', (request) => {
        if (request.url() === 'https://getform.io/f/7c481e53-5ff3-41a0-ad12-2f25803c92d6') {
          request.respond({
            content: 'application/json',
            body: JSON.stringify({type: "cors", url: "https://getform.io/thank-you", redirected: true, status: 200, ok: true})
          })
        }
        else {
          request.continue();
        }
      })
    });

    it('clears the fields on form submission', async () => {
      await page.focus('#name')
      await page.keyboard.type('Some Guy')
      expect(await page.$eval("#name", (input) => input.value)).toEqual('Some Guy');

      await page.focus('#email')
      await page.keyboard.type('someguy@example.com')
      expect(await page.$eval("#email", (input) => input.value)).toEqual('someguy@example.com');

      await page.focus('#message-area')
      await page.keyboard.type('Word up!')
      expect(await page.$eval("#message-area", (input) => input.value)).toEqual('Word up!');

      await page.click('button[type=submit]');

      expect(await page.$eval("#name", (input) => input.value)).toEqual('');
      expect(await page.$eval("#email", (input) => input.value)).toEqual('');
      expect(await page.$eval("#message-area", (input) => input.value)).toEqual('');
    });


    it('displays a friendly success message', async () => {
      let successMessage = await page.$$('#contact #success-message');
      expect(successMessage.length).toEqual(0);

      await page.focus('#name')
      await page.keyboard.type('Some Guy')

      await page.focus('#email')
      await page.keyboard.type('someguy@example.com')

      await page.focus('#message-area')
      await page.keyboard.type('Word up!')

      await page.click('button[type=submit]');

      successMessage = await page.$$('#contact #success-message');
      expect(successMessage.length).toEqual(1);

      expect(await successMessage[0].evaluate(el => el.innerText)).toMatch('Message sent');
    });
  });
});
