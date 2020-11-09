// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.js');
const DB_NAME = 'express-drones-dev';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const drones = [
    { name: 'Celeste', propellers: 30, maxSpeed: 8},
    { name: 'Beatriz', propellers: 40, maxSpeed: 15},
    { name: 'Rute', propellers: 20, maxSpeed: 10},
];

Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred... :( ${err}`))