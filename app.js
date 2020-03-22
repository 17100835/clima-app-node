const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({

        direccion: {
            demand: true,
            alias: 'd',
            descripcion: 'Direccion de la ciudad para obtener el clima'
        }
    }).help()
    .argv;


// lugar.getLugarLatLng(argv.direccion)/.then(console.log);

// clima.getClima(-9.790000, -76.199997)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima de ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);