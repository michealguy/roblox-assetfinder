# <img src="https://github.com/michealguy/roblox-assetsearcher/raw/main/icon.png" width="40"/> Roblox Asset ID Finder
A (stupid) "Roblox Asset ID Finder", aka a web scraper made via [NodeJS](https://nodejs.org/en/download/current) and [cheerio](https://github.com/cheeriojs/cheerio). 

## Installation

You can download [the latest release here.](https://github.com/michealguy/roblox-assetsearcher/releases/tag/v1.0)

Make sure to download the packages using:
```
> npm install
```

## Setup

Please replace "playername" with the player you are searching for:
```
const playername = ' ' // Replace the playername with what you're looking for
```
and ID with the ID you want to begin searching at:
```
let currentNumber = 5986210284 // Replace the ID
```

## Running
To run just do this:
```
> node scrape
```
