const GirlWorkout = require('./controllers/girlWorkouts');
const dbWorkouts = require('./data/workouts');

const Routes = [
  // TODO create RESTful routes for each
  // TODO select workout during each update
  // TODO make CRUD for each Create Read Update Delete
  {
    path: '/all',
    method: 'GET',
    handler: GirlWorkout.getAllWorkouts
  },
  {
    path: '/name/{name}',
    method: 'GET',
    handler: GirlWorkout.getWorkoutByName
  },
  {
    path: '/name',
    method: 'POST',
    handler: GirlWorkout.createWorkout
  },
  {
    path: '/name',
    method: 'PUT',
    handler: GirlWorkout.updateWorkout
  },
  {
    path: '/name',
    method: 'DELETE',
    handler: GirlWorkout.deleteWorkout
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