const { exec } = require('child_process');
const { chromium } = require('playwright');

console.log(process.platform);
const edgeCommand = process.platform === 'win32' ? '"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"' : 'msedge';

const url = 'https://www.example.com';

exec(`${edgeCommand} ${url}`, async (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening Edge: ${error}`);
    return;
  }
  console.log('Edge opened successfully.');

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Simulate key presses after the browser is opened
  const browserKeyboard = await context.keyboard;

  await browserKeyboard.down('Control');
  await browserKeyboard.down('Shift');
  await browserKeyboard.press('.');
  await browserKeyboard.up('Control');
  await browserKeyboard.up('Shift');

  await page.goto(url);

  // Rest of your interactions with the page can continue here

  await browser.close();
});
