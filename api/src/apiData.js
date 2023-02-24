/*const { Country } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getData = async () =>{
    try {
        let countries = [];
        const apiUrl = await axios.get(`https://restcountries.com/v3/all`);
        countries.push(apiUrl)
        countries = (await Promise.all(countries)).map(res => res.data.map(e =>{
            return({
                id: e.cca3,
                name: e.name.common,
                img: e.flags[1],
                continent: e.region,
                capital: e.capital ? e.capital[0] : "capital not found",
                subregion: e.subregion,
                area: e.area,
                population: e.population,
                
            })
        }))

        let allCountries = [];
        countries.map(count => {
            allCountries = allCountries.concat(count)
        })
        return allCountries;
    }catch (err){
        res.send(err)
    }
};

const saveData = async() =>{
    try {
        const allCountry = await getData();
        await Country.bulkCreate(allCountry);

        return allCountry;
    } catch (error){
        return {error: error.message}
    }
}

module.exports= saveData;*/