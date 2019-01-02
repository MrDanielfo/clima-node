const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let response =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`); 

        if(response.data.status  === "ZERO_RESULTS") {

            throw new Error(`No hay resultados para la ciudad ${direccion}`); 

        }

        let location = response.data.results[0];
        let coors = location.geometry.location;


        //console.log(JSON.stringify(response.data, undefined, 2));
        //console.log(JSON.stringify(location.formatted_address, undefined, 2));
        //console.log(JSON.stringify(coors.lat, undefined, 2));
        //console.log(JSON.stringify(coors.lng, undefined, 2));
        //console.log(response.status); 

        return {
            direccion : location.formatted_address,
            lat : coors.lat,
            lng : coors.lng
        }

}


module.exports = {
    getLugarLatLng
}; 




