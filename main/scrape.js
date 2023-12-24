const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 5000;
const baseUrl = 'https://www.roblox.com/library/';
let currentNumber = 5986210284 // Replace with the ID
let checkedNumber = 0

let username = [];

const gettingData = async () => {
try {
    const url = baseUrl + currentNumber
    let res = await axios.get(url);
    let $ = await cheerio.load(res.data);

    // Specify the selector
    let element = $(
        "#item-container > div.remove-panel.section-content.top-section > div.border-bottom.item-name-container > div > span.text-label > a"
    );

    if (element.length > 0) {
        // Element exists
        element.each((i, e) => {
            if ($(e).text() === '<playername>' || $(e).text() === '@Lightning_Splash') { // If it finds <playername>
                console.log('Player: ' + $(e).text() + ' ' + 'Is <playername>: TRUE ' + url);
                username.push('Is <playername>: TRUE ');
                username.push('URL: ' + url);
                checkedNumber++;
                return;
            } else {
                console.log('Player: ' + $(e).text() + ' ' + '<playername> = FALSE' + ' ' + 'URL: ' + url); // If it finds a Dev Item
                // username.push('Is <playername>: FALSE');
                currentNumber++;
                checkedNumber++;
                gettingData();
                return;
            }
        });
    } else {
        console.log('Not a dev item. ' + url) // If it doesn't find shit
        checkedNumber++;
        currentNumber++;
        gettingData();
        return;
    }
} catch (error) {
    console.error('Roblox 404 Error')
    currentNumber++;
    gettingData();
    return;
}
};
for (let i = 0; i < 5; i++) { // Run as many as you want lol
  gettingData();
}

app.get("/scrape", (req, res) => {
    res.send('Checked: ' + checkedNumber + ', ' + username);
});

app.listen(port, () => console.log('Server running! Server: http://localhost:5000/scrape'));
