const routes = require('next-routes')();

routes
    .add("/queja/nueva", "/queja/nueva")
    .add("/queja/listado","/queja/listado")
    .add("/queja/buscar","/queja/buscar")
    .add("/queja/:address", "/queja/detalle");

module.exports = routes;




