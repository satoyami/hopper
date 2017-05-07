const Hopper = require('../models/hopper');
const hopper = new Hopper();
const WorkoutModel = require('../models/workoutModel');
const workouts = require('../data/workouts');

function getWorkoutByName(request, reply) {
  const name = request.params.name.toLowerCase();
  if (name !== 'favicon.ico') {
    let wod = {};
    hopper.selectByName(name).then((result) => {
      const wkt = new WorkoutModel(result);
      wod.name = wkt.name;
      wod.media = wkt.linksToMovement;
      wod.body = JSON.stringify(wkt);
      wod.reps = wkt.getReps();
      // reply.view('index.html', {title: name, workout: wod});
      return reply(wod);
    }).catch(err => reply(err));
  }
}

function createWorkout(request, reply) {
  workouts.createWorkout(request)
    .then((inserted) => {
      return reply(inserted);
    })
    .catch((err) => {
      return reply(err);
    });
}

function getWorkoutByMovement(request, reply) {
  const movement = request.params.movement.toLowerCase();
  if (movement !== 'favicon.ico') {
    let wod = {};
    hopper.selectByMovement(movement).then((result) => {
      // const wkt = new WorkoutModel(result);
      // wod.name = wkt.name;
      // wod.media = wkt.linksToMovement;
      // wod.body = JSON.stringify(wkt);
      // wod.reps = wkt.getReps();
      // reply.view('index.html', {title: name, workout: wod});
      return reply(result);
    }).catch(err => reply(err));
  }
}

function getRandomGirlsWorkout(request,reply) {
  let wod = {};
  hopper.spin().then((result) => {
    const wkt = new WorkoutModel(result);
    wod.name = wkt.name;
    wod.media = wkt.linksToMovement;
    wod.body = JSON.stringify(wkt);
    wod.reps = wkt.getReps();
    // reply.view('index', { title: 'Hapi', workout: wod });
    return reply(wod);
  }).catch(err => reply(err));
}

module.exports = { getRandomGirlsWorkout, getWorkoutByMovement, getWorkoutByName };