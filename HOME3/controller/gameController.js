const fs = require('fs');
const path = require('path');
const fileName = path.resolve('data/gameResults.txt');

exports.finishGame = function finishGame(req, res) {
    const body = req.body;
    const gameResultsFile = fs.readFileSync(fileName).toString();
    let gameNumber = 0;
    if (gameResultsFile.length - 1 < 0) {
        gameNumber = 1;
    } else {
        gameNumber = gameResultsFile.split('\n').length;
    }

    fs.appendFile(fileName, 
        JSON.stringify({
            id: gameNumber,
            winner: body.winner,
            loser: body.loser
    }) + '\n',
    (err) => {
        if (err) throw err;
        res.send({
            id: gameNumber
        });
    })
}

exports.gameResult = function(req, res) {
    const resultsFileArray = fs.readFileSync(fileName).toString().split('\n').filter(el => el != '');
    res.send(resultsFileArray.map(row => {
        if (row != '') {return JSON.parse(row);}
    }))
}

exports.deleteResult = function(req, res) {
    fs.truncateSync(fileName);
    res.send("Файл очищен")
}