const Primus = require('primus');

let go = (server) => {
    new Primus(server)
}

module.exports.go = go;