const axios = require('axios');


const getLugarLatLng = async(dir) => {

    let encodeURL = encodeURI(dir);

    const instancia = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '9d04fb401bmsh486c8ac5aa8e90bp16476ejsnc4281f5ed86b' }

    });

    let resp = await instancia.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro resultado para ${ dir }`);
    }

    let data = resp.data.Results[0];
    let direccion = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {

        direccion,
        lat,
        lng

    }


    // instancia.get()
    //     .then(resp => console.log(resp.data.Results[0]))
    //     .catch(err => console.log('ERRO!!!', err));

}

module.exports = {
    getLugarLatLng
}