const Hopper = require('./hopper');
const hopper = new Hopper();
const WorkoutModel = require('./models/workoutModel');
const GirlWorkout = require('./daos/girlWorkouts');

const Routes = [
  {
    path: '/{name}',
    method: 'GET',
    handler: getWorkoutByName
  }, {
    path: '/randomgirls',
    method: 'GET',
    handler: GirlWorkout.getRandomGirlsWorkout
  }
];

module.exports = Routes;