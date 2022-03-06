const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/create_new_task', UserController.create_new_task);
router.post('/get_all_tasks', UserController.get_all_tasks);
router.post('/delete_task', UserController.delete_task);

module.exports = router