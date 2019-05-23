import web3 from './web3';
import CAPAchain from './build/contracts/CAPAChain';


const instance = new web3.eth.Contract(
    CAPAchain.abi,
    '0x3f634B5799D2989865483d460Ca8A1C9acfebD65'
);

/*
const instance = new web3.eth.Contract(
    CAPAchain.abi,
    '0x7F0387b46d1bba295aB3470bA892971A0d225542'
);
*/
export default instance;