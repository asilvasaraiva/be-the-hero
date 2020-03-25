const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionCotroller = require( './controllers/SessionController');

routes.post('/sessions',SessionCotroller.createLogin); 

routes.get('/ongs',ongController.listAll); 
routes.post('/ongs',ongController.create);

routes.get('/profile', ProfileController.listByOngId);

routes.get('/incidents',IncidentController.listAll);
routes.post('/incidents',IncidentController.create); 
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;