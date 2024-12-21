const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
    // Membuat koneksi dengan Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    // Exception handling & Conclusion
    try {
        // Buka URL di browser
        await driver.get("https://www.saucedemo.com/");

        // Mencari element user-name dan password
        let userNameField = await driver.findElement(By.id('user-name'));
        let passwordField = await driver.findElement(By.id('password'));

        // Simulasikan behavior pengguna dengan mengetikkan data ke dalam field
        await userNameField.sendKeys("standard_user");
        await passwordField.sendKeys("secret_sauce", Key.RETURN);

        // Tunggu sampai elemen tertentu muncul atau timeout
        await driver.wait(until.elementLocated(By.id('inventory_container')), 10000);

        // mencoba klik product
        let product1Button = await driver.findElement(By.id('add-to-cart-sauce-labs-backpack'));
        await product1Button.click();

        let product2Button = await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light'));
        await product2Button.click();  
        
        // melakukan klik pada cart
        let cart1button = await driver.findElement(By.xpath('//*[@class="shopping_cart_link"]'))
        await cart1button.click();
        
        // melakukan klik checkout
        let checkout1button = await driver.findElement(By.xpath('//*[@class="btn btn_action btn_medium checkout_button "]'))
        await checkout1button.click();

        //input data pembeli
        let firstname1 = await driver.findElement(By.id('first-name'));
        await firstname1.sendKeys("hassan");
        let lastname1 = await driver.findElement(By.id('last-name'));
        await lastname1.sendKeys("bakrie");
        let postalcode1 = await driver.findElement(By.xpath('//input[@id="postal-code"]'))
        await postalcode1.sendKeys("18992");

        //click continue button
        let continue2button = await driver.findElement(By.xpath('//input[@id="continue"]'))
        await continue2button.click();

        //click finish dah selesai
        let finishbutton = await driver.findElement(By.xpath('//button[@id="finish"]'))
        await finishbutton.click();

        await sleep(3);

        //back 2 home
        let back2homebutton = await driver.findElement(By.xpath('//button[@id="back-to-products"]'))
        await back2homebutton.click();

        await sleep(5);

//        let firstnameField = await driver.findElement(By.id('first-name'));
//        await userNameField.sendKeys("haekal");
//        let lastnameField = await driver.findElement(By.id('last-name'));
//        await passwordField.sendKeys("gtg"); 
//        let portalField = await driver.findElement(By.id('postal-code'));
//        await passwordField.sendKeys("16772");    

        //klik button continue
        let continue1button = await driver.findElement(By.xpath('//*[@class="submit-button btn btn_primary cart_button btn_action"]'))
        await continue1button.click();

        // Mendapatkan judul halaman
        let title = await driver.getTitle();
        console.log(`Page Title is: ${title}`);
    } finally {

        // Tutup browser
       // await driver.quit(10);
    }
}

exampleTest();