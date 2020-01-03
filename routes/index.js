const express = require('express');
const { home, projects, } = require('./routes');
const router = express.Router();
const HC = require('../controllers/HomeController');
const PC = require('../controllers/ProjectController');


router.get('/', HC.index);

router.route('/projects')
    .get(PC.index)
    .post(PC.store);

router.route('/projects/:project')
    .get(PC.show)
    .delete(PC.delete);

router.get('/projects/:project/edit', PC.edit);

module.exports = router;
