const express = require('express'); 
const router = express.Router(); 

const locais_irrigacaoController = require('../controllers/locais_irrigacao'); 

router.get('/locais_irrigacao', locais_irrigacaoController.listarlocais_irrigacao); 
router.post('/locais_irrigacao', locais_irrigacaoController.cadastrarlocais_irrigacao); 
router.patch('/ulocais_irrigacao', locais_irrigacaoController.editarlocais_irrigacao); 
router.delete('/locais_irrigacao', locais_irrigacaoController.apagarlocais_irrigacao); 


module.exports = router;