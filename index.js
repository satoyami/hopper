const _ = require('lodash');
const Hopper = require('./hopper');
const Workout = require('./workoutModel');

const hopper = new Hopper();

hopper.spin().then((result) => {
  let wkt = new Workout(result);
  console.log('--------------');
  console.log(`workout picked: ${wkt.name}`);
  console.log(wkt);
  console.log(`Total reps: ${wkt.getReps()}`);
});
