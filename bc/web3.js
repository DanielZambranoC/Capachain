/*
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export default web3;
*/

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  window.web3.currentProvider.enable();
} else {
  /*
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/45920110e9614f5d9845a12d7cc1e6b4'
  );
  */
  const provider = new Web3.providers.HttpProvider(
    'HTTP://192.168.1.152:7545'
  );

  web3 = new Web3(provider);
}

export default web3;