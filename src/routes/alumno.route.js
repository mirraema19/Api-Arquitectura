const express = require('express');
const router = express.Router();
const {create, getById, index, logicDelete, updateById} = require('../controllers/alumno.controller');

router.post('/', create);
router.get('/:id', getById);
router.get('/', index);
router.delete('/:id', logicDelete);
router.patch('/:id', updateById);

module.exports = router;