const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

async function automateChat() {
  const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  try {
    await driver.get('https://chat.openai.com/auth/login');

    // Find the "Log in" button and click it using its text content
    const loginButton = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[1]/div[2]/div[1]/div/button[1]')),
      100000
    );
    await loginButton.click();

    // Wait for the login page to load
    await driver.wait(until.urlMatches(/https:\/\/auth0\.openai\.com\/u\/login\/identifier\?state=.*/), 10000);

    // Find the username and password input fields and enter your credentials
    const usernameField = await driver.findElement(By.xpath('//*[@id="username"]'));
    // const passwordField = await driver.findElement(By.id('password'));
    await usernameField.sendKeys('matlance2020@gmail.com');


   const contiueButton = await driver.wait(
      until.elementLocated(By.xpath('/html/body/div/main/section/div/div/div/div[1]/div/form/div[2]/button')),
      100000
    );
    await contiueButton.click();

    // await passwordField.sendKeys('your_password');

    // Submit the login form
    // const submitButton = await driver.findElement(By.xpath('//button[contains(text(), "Submit")]'));
    // await submitButton.click();

    // Wait for the dashboard page to load after login
    await driver.wait(until.urlMatches(/https:\/\/auth0\.openai\.com\/u\/login\/password\?state=.*/), 10000);

    // Set manually obtained cookies to maintain the session
// Find the username and password input fields and enter your credentials
const passwordField = await driver.findElement(By.xpath('//*[@id="password"]'));
await passwordField.sendKeys('Blessing!16507707');

const contiueButton2 = await driver.wait(
  until.elementLocated(By.xpath('/html/body/div/main/section/div/div/div/form/div[3]/button')),
  100000
);
await contiueButton2.click();


const contiueButton3 = await driver.wait(
  until.elementLocated(By.xpath('//*[@id="radix-:rf:"]/div[2]/div/div[4]/button')),
  100000
);
await contiueButton3.click();

    // Find the input bar and send "Hello, world!" text
    const inputBar = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="prompt-textarea"]')),
      10000
    );
    await inputBar.sendKeys('Hello, world!');

    // Press Enter
    await inputBar.sendKeys(webdriver.Key.ENTER);
  
     // Wait for 20 seconds to let the content be generated
     await new Promise(resolve => setTimeout(resolve, 20000));

    //pick returned content
    const answerDiv = await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div/main/div/div[1]/div/div/div/div[2]'));

    // Get the text content of the div element
    const answer = await answerDiv.getText();

    console.log('Div Content:', answer);

    // Optional: Add a delay to see the result before closing the browser
    await driver.sleep(30000); // Wait for 30 seconds
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Call the function to start the automation
automateChat();
