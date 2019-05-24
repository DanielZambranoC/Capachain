import web3 from './web3';
import Queja from './build/contracts/Queja';


export default (contrato) => {
    return new web3.eth.Contract(
        Queja.abi,
        contrato
    );
}