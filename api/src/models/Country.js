const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
  /* id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    continents: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subregion: {
        type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },*/
    id: {
      type: DataTypes.STRING,
      // defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    maps: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    currencies: {
      type: DataTypes.STRING,
      allowNull:true,
    }
  }, {timestamps: false});
};

