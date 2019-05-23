const routes = require('next-routes')();

routes
    .add("/queja/nueva", "/queja/nueva")
    .add("/queja/:address", "/queja/detalle");

module.exports = routes;




