const axios = require('axios'); 


const getClima = async (lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8fd42c138a50b31a40c13d9f632b9189`);
    
    if(response.data.cod === "400") {
        throw new Error(`Los datos de ${lat} y ${lng} son incorrectos`);
    }

    let temperatura = response.data.main.temp; 

    //console.log(response); 

    return {
        clima : temperatura
    }

}


module.exports = {
    getClima
}