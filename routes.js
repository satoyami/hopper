const GirlWorkout = require('./daos/girlWorkouts');

const Routes = [
  {
    path: '/{name}',
    method: 'GET',
    handler: GirlWorkout.getWorkoutByName
  }, {
    path: '/randomgirls',
    method: 'GET',
    handler: GirlWorkout.getRandomGirlsWorkout,
  }
];

module.exports = Routes;