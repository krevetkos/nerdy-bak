const express = require('express');
const router = express.Router();
const { create, getUserTask, deleteUserTask, updateUserTask } = require('./task.controller');
const { tokenValidation } = require('../middleware/tokenValidation');
router.post('/create', tokenValidation, create);
router.post('/', tokenValidation, getUserTask);
router.delete('/:id', tokenValidation, deleteUserTask);
router.put('/:id', tokenValidation, updateUserTask);
module.exports = router;