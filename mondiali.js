const express = require('express'),
    bodyParser = require('body-parser');
const teams = express.Router();

var uuid = require('uuid-v4');

const squadre = []


teams.get('/teams', function (req, res) {
    res.json(squadre);
})

teams.post('/:nomesquadra/:still', function (req, res) {
    const newSquadra = req.body;
    //newAssignment.assignmentID = uuid()
    //newAssignment.dateUpdated = new Date()
	newSquadra.id = uuid();
	newSquadra.name = req.params.nomesquadra;
	newSquadra.is_still_in = req.params.still;
    squadre.push(newSquadra);
    res.json(newSquadra);
})

teams.get('/idSquadra/:id', function (req, res) {
	//res.json({funziona: "OK"});
    const id = req.params.id;
    console.log(id);
    const i = squadre.findIndex(item => {return item.id === id});
    if (i==-1) res.sendStatus(404);
    else {
        res.status=200;
        res.json(squadre[i]);
    }

})

teams.get('/nomeSquadra/:name', function (req, res) {
    const name = req.params.name;
    const i = squadre.findIndex(item => {return item.name === name});
    if (i==-1) res.sendStatus(404);
    else {
        res.status=200;
        res.json(squadre[i]);
    }
})


teams.put('/:id/:name/:is_still_in', function (req, res) {
    const id = req.params.id;
    const i = squadre.findIndex(item => {return item.id === id});
    squadre[i] = req.body;
    squadre[i].id = id;
    squadre[i].name = req.params.name;
    squadre[i].is_still_in = req.params.is_still_in;
    res.json(squadre[i]);
})


module.exports = teams