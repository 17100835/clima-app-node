const axios = require('axios');


const getClima = async(lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0397656ba8d7eadbe5a76a202d332ba9&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}