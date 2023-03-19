const express = require('express')

const router = express.Router()


const userController = require("../../controller/user-controller") 


router.get('/city',userController.get);
router.post('/city',userController.create);
router.delete('/city/:id',userController.destroy)
router.put('/city/:id',userController.update);


module.exports = router