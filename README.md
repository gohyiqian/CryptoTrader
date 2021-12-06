# CryptoTrader

Access the Web Application here: [CryptoTrader]()

A web application that allow user to buy and sell cryptocurrencies. The cryptocurrencies prices are fetch from [CoinGecko Public API](https://www.coingecko.com/en/api). Public user can visit the web to check the latest cryptocurrencies prices and read about the latest user blog on cryptocurrencies. Registered user can access their trading account and wallet or post new blogpost on cryptocurrencies news.

## Main Tech Stack

The application was developed using the MongoDB, ExpressJS, ReactJS, NodeJS (MERN) stack. React Bootstrap was used as the main CSS framework.

- MongoDB
- ExpressJS
- ReactJS
- NodeJS
- React Bootstrap
- JWT Authentication
- ApexCharts

## Structure of Web Application

The key components are as follow:

![Web Application Structure](/client/public/images/CryptoTrader_Diagram.jpg)

1. Home Page - Landing Page for all users, briefly explain the purpose of the website to visitors.

2. Navigation Bar - Consists of react route to different pages.

3. Price Page - Show a table of live prices of the top 100 Cryptocurrencies.

4. Wallet Page (Protected Route) - This is a protected route that only registered user can access. It shows user balances, user past transfer and transaction history. Transfer refers to deposit or withdrawal from account while transaction refers to buy or sell trades.

5. Trade Page (Protected Route) - This is also a route that only registered user can access.

6. Blog Post Page - A publicly accessible blog but only registered user can post blogs. (WIP)

## Mongoose Schemas

- User: {name, contactNumber, email, password, date, ownedAssetsQtyAndCostBase}
- TransferHistory: {email, transType, amount}
- TransactionHistory: {transId, email, coinCurrencyPair, transType, individualAmount, quantity, grossAmount}
- RealisedPNL: {transId, email, coinCurrencyPair, infividualAmount, quantity, gorssAmount, costAmount, PnL, percentagePnL}
- Post: {title, desc, photo, email, categories} - (WIP)

## Interesting Features

- useContext React Hooks for Dark and Light Theme: User can choose to trade in their preferred theme.
