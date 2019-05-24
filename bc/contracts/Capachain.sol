pragma solidity >=0.4.17 <0.6.0;

contract CAPAFactory {
    address[] public contratos;
    function registrarQueja(string memory _descripcion, string memory _nombre, string memory _correo, string memory _fecha) public {
        address contrato = address(new Queja(_descripcion, _nombre, _correo, _fecha));
        contratos.push(contrato);
    }
    function listadoQuejas() public view returns (address[] memory) {
        return contratos;
    }

    function quejasRegistradas() public view returns (address[] memory) {
        return contratos;
    }
}

contract Queja {

    struct DatosQueja {
        address quienReporta;
        string nombre;
        string correo;
        string descripcion;
        string fecha;
        bool cerrado;
    }
    DatosQueja[] public queja;
    constructor(string memory _descripcion, string memory _nombre, string memory _correo, string memory _fecha) public {
        DatosQueja memory nuevaQueja = DatosQueja({
            quienReporta: msg.sender,
            nombre: _nombre,
            correo: _correo,
            fecha: _fecha,
            descripcion: _descripcion,
            cerrado: false
        });
        queja.push(nuevaQueja);
    }
    function verDetalle() public view returns (address, string memory, string memory, string memory, string memory) {
        DatosQueja storage q = queja[0];
        return (q.quienReporta,q.nombre,q.correo,q.fecha,q.descripcion);
    }
}

