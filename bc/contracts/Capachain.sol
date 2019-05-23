pragma solidity >=0.4.17 <0.6.0;

contract CAPAChain {
    address[] public quejasEmitidas;
    function nuevaQueja(string memory descripcion) public {
        address nQueja = address(new registraQueja(descripcion));
        quejasEmitidas.push(nQueja);
    }
    function quejasRegistradas() public view returns (address[] memory) {
        return quejasEmitidas;
    }

    /*
    function verQueja() public view  {

    }
    */
}
contract registraQueja {
    struct Queja {
        address quienReporta;
        string descripcion;
        bool cerrado;
    }
    Queja[] public quejas;
    address public usuario;
    address public gerente;
    //string public objetoCaso; // personal, area, proceso, etc..
    //string public detalleObjCaso; // proceso X, area Y, personal Z, etc...
    //string public tipoCuestion; //queja, reclamos, apelaciones, etc...
    // string public descripcion; // que paso?

    modifier restringido() {
        require(msg.sender == gerente,"Sender not authorized.");
        _;
    }
    constructor (string memory descripcion) public {
        // 1. Fecha y naturaleza de la queja
        usuario = msg.sender;
        Queja memory nuevaQueja = Queja({
            quienReporta : usuario,
            descripcion : descripcion,
            cerrado : false
        });
        quejas.push(nuevaQueja);
    }
    /*
    function asignarCaso(uint index) public restringido {
        // 2. A quien en QSI se le asigno el caso y cuando
        //require()

        Queja storage queja = quejas[index];
    }
    */
    /*
    function accionCausaMitigacion() {
        // 3. La accion inmediata para tratar el problema.
        // 4. El metodo, resultado y fecha de la investigación de causa.
        // 5. La accion para mitigar la causa y su fecha.
        // 6. Comentarios y fecha de cierre de la acción.
    }
    */
    /*
    function evaluacionEfectividad() {
    }
    */
}