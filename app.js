 
const lugar = require('./lugar/lugar'); 

const clima = require('./clima/clima'); 

const argv = require('yargs')
             .options({
                 direccion: {
                     alias: 'd',
                     desc: 'Ubicación de la ciudad para obtener el clima',
                     demand: true
                 }
             }).argv; 

/* forma de hacerlo con async y await */ 

let getInfo = async (direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion)
        let ubicacion = await clima.getClima(coors.lat, coors.lng); 
        return `El clima en ${coors.direccion} es de ${ubicacion.clima} grados centígrados`; 

    } catch (e) {
        return `No se pudo encontrar el clima de ${direccion}`; 
    }


}

getInfo(argv.direccion)
    .then( mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err); 
    })

/* forma de hacerlo con promesas */

/* lugar.getLugarLatLng(argv.direccion)
      .then(response => {
        console.log(response)

        clima.getClima(response.lat, response.lng)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err); 
            });

      })
      .catch(err => {
        console.log(err); 
      }); 

*/ 



//console.log(argv.direccion); 

