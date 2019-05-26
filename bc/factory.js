import web3 from './web3';
import CAPAchain from './build/contracts/CAPAFactory';

/*
//const contrato = '0x3f634B5799D2989865483d460Ca8A1C9acfebD65';
//const contrato = '0x3D5DC2b02Ffb48234055E4761e61C7cDECe93350';
const contrato = '0xAd441863b9A5f48528f83c205B2436397b9d9D68';

const instance = new web3.eth.Contract(
    CAPAchain.abi,
    contrato
);
*/

const instance = new web3.eth.Contract(
    CAPAchain.abi,
    '0x554723Ca0Ac1661836888F8D4683A14B5235963a'
);

export default instance;