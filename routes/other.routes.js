 const express = require ("express");
 const router = express.Router();

 const controller = require ('../controllers/other')
 router.get ("/",controller.index),
 router.get ("/menu/:id",controller.detalle)





 module.exports = router;