/*const { Country } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");


// const getAllCountries = async () => {
//     const apiUrl = await axios.get(`https://restcountries.com/v3/all`);

//     const info = await apiUrl.data.map(e => {
//         return{
//             id: e.cca3,
//             name: e.name.common,
//             flag: e.flags[1],
//             continent: e.region,
//             capital: e.capital ? e.capital[0] : "capital not found",
//             subregion: e.subregion,
//             area: e.area,
//             population: e.population,
//             map: e.maps.googleMaps

//         }
//     });
//     //console.log(info)
//     return info;
// };

const data = async ()  => {
    const apiUrl = await axios.get(`https://restcountries.com/v3/all`);
    const info = await apiUrl.data.map(e => {
        return{
            id: e.cca3,
            name: e.name.common,
            flag: e.flags[1],
            continent: e.region,
            capital: e.capital ? e.capital[0] : "capital not found",
            subregion: e.subregion,
            area: e.area,
            population: e.population,
            map: e.maps.googleMaps

        }
    });
    return info;
}

const getAllCountries = async () => {
    const apiCountries = await data();
    let hay = await Country.findAll();

    if (!hay.length) await Country.bulkCreate(apiCountries)
    
}

const searchCountryByName = () => {

};


module.exports = {
    getAllCountries,
    searchCountryByName
};*/
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");


const loader = async () => {
    const allCountries = await Country.findAll({
      include: Activity
    });
    if(!allCountries.length){
    const funcion = (objeto) =>{
      for(props in objeto){
        return objeto[props].name
      }
    }
    const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
    const apiCountries = apiCountriesResponse.data?.map((el) => {
          return {
          id: el.cca3,
          name: el.translations.spa.common,
          continents:el.continents[0],
          capital: el.capital? el.capital.join(", "): "No tiene capital",
          flags: el.flags[0],
          subregion: el.subregion? el.subregion : "No tiene subregion",
          area: el.area,
          maps: el.maps.googleMaps? el.maps.googleMaps : "No esta en google maps ",
          population: el.population,
          currencies :  funcion(el.currencies) ? funcion(el.currencies) : "No tiene moneda"
        } 
    })
    await Country.bulkCreate(apiCountries);
      console.log(apiCountries)
    }
}
module.exports = ({
    loader
})