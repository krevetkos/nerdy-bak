const express = require('express');
const router = express.Router();

const User = require('../user/user.rout');
const Task = require('../task/task.rout');
router.use('/user', User);
router.use('/task', Task);

exports.router = router;