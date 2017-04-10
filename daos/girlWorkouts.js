const Hopper = require('../models/hopper');
const hopper = new Hopper();
const WorkoutModel = require('../models/workoutModel');

function getWorkoutByName(request, reply) {
  const name = request.params.name.toLowerCase();
  let wod = {};
  hopper.selectByName(name).then((result) => {
    console.log(name);
    const wkt = new WorkoutModel(result);
    wod.name = wkt.name;
    wod.media = wkt.linksToMovement;
    wod.body = JSON.stringify(wkt);
    wod.reps = wkt.getReps();
    // reply.view('index.html', {title: name, workout: wod});
    return reply(wod);
  }).catch(err => reply(err));
}

function getRandomGirlsWorkout(request,reply) {
  let wod = {};
  hopper.spin([]).then((result) => {
    const wkt = new WorkoutModel(result);
    wod.name = wkt.name;
    wod.media = wkt.linksToMovement;
    wod.body = JSON.stringify(wkt);
    wod.reps = wkt.getReps();
    // reply.view('index', { title: 'Hapi', workout: wod });
    return reply(wod);
  }).catch(err => reply(err));
}

module.exports = { getRandomGirlsWorkout, getWorkoutByName };