const { Router } = require('express');
const { Country, Activity } = require("../db");
const { Op } = require('sequelize');
//const { getCountries }= require("../handlers/countriesHandlers");

const countriesR = Router();

//countriesR.get("/", getCountries);
//countriesR.get("/:id", getCountriesById);


//Ruta get por name de country o traer todos los paises
countriesR.get('/', async (req,res) => {
    const name = req.query.name
    const country = await Country.findAll({include: Activity})
    const countryForName = await Country.findAll({
        where: {
            name: {
            [Op.iLike]: `%${name}%`
          },
        },
         include: Activity
      });
    try{
        if(name){
            countryForName.length?
            res.status(200).send(countryForName):
            res.status(404).send(`No se encontro el pais ${name}`)
        }
        else{
            res.send(country)
        }
    } catch(error){
        res.status(400).send(error);
    }
});
//Ruta get de country por id
countriesR.get('/:id', async (req,res) => {
    const id = req.params.id.toUpperCase();
    try{
         
         const countryForId = await Country.findByPk(id, {
         include: {
                model: Activity
            }
        });
        // const firstId = countryForId.includes(countryForId.id !== id)
        
        res.send(countryForId)
    }catch(error){
         res.send(error);
    }
});


module.exports = countriesR;