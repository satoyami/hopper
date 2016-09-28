const _ = require('lodash');
const hopper = require('./hopper');
const workouts = require('./workouts');
const Workout = require('./workoutModel');
const moment = require('moment');

// console.log(wkt.name);
// console.log('--------------');
// console.log(wkt.TYPE);
// console.log('--------------');
// console.log(wkt.PropNames);
// console.log('--------------');
// console.log(wkt.getReps());
hopper.selectPick().then((result) => {
  let wkt = new Workout(workouts[result]);
  console.log('--------------');
  console.log('workout picked:');
  console.log(wkt);
});
