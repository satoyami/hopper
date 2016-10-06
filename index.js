const _ = require('lodash');
const hopper = require('./hopper');
const workouts = require('./workouts');
const Workout = require('./workoutModel');
const moment = require('moment');

hopper.selectPick().then((result) => {
  let wkt = new Workout(workouts[result]);
  console.log('--------------');
  console.log('workout picked:');
  console.log(wkt);
  console.log(`Total reps: ${wkt.getReps()}`);
});
