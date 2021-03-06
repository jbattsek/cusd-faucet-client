# CUSD Faucet Client: Quick start

## Current Features
- Sign in to web3 accounts either via third-party web3 providers like MetaMask or the app's native account management system
- Store encrypted web3 accounts and retrieve the accounts after future sign-ins
- Mint new testnet CUSD, transfer it, or redeem it

## Planned Features
- Support for other chains: EOS
- Connection to a token exchange engine

## Developer setup

Production Client at: https://dripdrip.netlify.com/
Test Client at: https://cusd-faucet-ropsten.herokuapp.com/

1) `npm i` to install dependencies
2) `npm run start-test` to start local ropsten CUSD faucet

3) Choice of REST server:
- Change `server_url` link in `./src/config.js` to select server for broadcasting web3 transactions and managing accounts

4) `npm run build` to make minimified `build/index.html` app
5) `npm run start` to serve optimized `index.html`

![Ropsten Wallet Screenshot](https://github.com/nicholaspai/cusd-faucet-client/blob/master/cusd-faucet-account.gif)

## Ethereum connection
Connection via an Infura WebSocket

# React App: 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
