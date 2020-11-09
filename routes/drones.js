const express = require('express');

// require the Drone model here
const router = express.Router();
const Drone = require('../models/Drone');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((allDrones) => {
    res.render('drones/list', {drones: allDrones})
  })
  .catch((err) => {
    res.render('error', { err });
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let {name, propellers, maxSpeed} = req.body;
  Drone.create({
    name,
    propellers,
    maxSpeed
  }).then(() => {
    res.redirect('/drones');
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let droneId = req.params.id;
  Drone.findById(droneId)
  .then((droneFound) => {
    res.render('drones/update-form', {drone: droneFound})
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let droneId = req.params.id;
  let {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(droneId, {
    name,
    propellers,
    maxSpeed
  }).then(() => {
    res.redirect('/drones')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  let droneId = req.params.id;
  Drone.findByIdAndDelete(droneId)
  .then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
