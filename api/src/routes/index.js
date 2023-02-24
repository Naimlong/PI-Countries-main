const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesR = require("./countriesRouter");
const activityR = require("./activityRouter");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesR);
router.use('/activities', activityR);


module.exports = router;
