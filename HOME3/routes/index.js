const express = require('express');
const router = express.Router();
const path = require('path');
const gameController = require('../controller/gameController');

router.use('/',
    express.static(path.resolve('pages/main')))

router.use('/results',
    express.static(path.resolve('pages/results')))

router.route('/api/results')
    .get((req, res) => {
        gameController.gameResult(req, res);
    })
    .post((req, res) => {
        gameController.finishGame(req, res);
    })
    .delete((req, res) => {
        gameController.deleteResult(req, res);
    });

module.exports = router;