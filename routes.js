const GirlWorkout = require('./controllers/girlWorkouts');

const Routes = [
  {
    path: '/name/{name}',
    method: 'GET',
    handler: GirlWorkout.getWorkoutByName
  },
  {
    path: '/name/{name}',
    method: 'POST',
    handler: GirlWorkout.createWorkout
  },
  {
    path: '/movement/{movement}',
    method: 'GET',
    handler: GirlWorkout.getWorkoutByMovement
  }, {
    path: '/randomgirls',
    method: 'GET',
    handler: GirlWorkout.getRandomGirlsWorkout
  }
];

module.exports = Routes;