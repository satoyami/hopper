const Hopper = require('../models/hopper');
const hopper = new Hopper();
const WorkoutModel = require('../models/workoutModel');
const workouts = require('../data/workouts');

const routeHandler = {
  
  /**
   * Outputs all workouts
   * @returns {json}
   */
  getAllWorkouts: function getAllWorkouts(request, reply) {
    workouts.getAllDocs().then((result) => {
      // reply.view('update.html', {result: result});
      return reply(result);
    }).catch(err => reply(err));
  },
  
  /**
   * Gets workout by name
   * @param {string} name
   * @returns {json}
   */
  getWorkoutByName: function getWorkoutByName(request, reply) {
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
  },
  
  /**
   * Creates workout
   * @returns {json}
   */
  createWorkout: function createWorkout(request, reply) {
    // console.log(JSON.stringify(request));
    workouts.createWorkout(request)
      .then((inserted) => {
        // return reply.view('update.html', {insert: inserted});
        return reply(inserted);
      })
      .catch((err) => {
        return reply(err);
      });
  },
  
  /**
   * Updates workout
   * @returns {json}
   */
  updateWorkout: function updateWorkout(request, reply) {
    const fields = request.params;
    // console.log(JSON.stringify(request));
    workouts.updateWorkout(fields)
      .then((updated) => {
        // return reply.view('update.html', {insert: inserted});
        return reply(updated);
      })
      .catch((err) => {
        return reply(err);
      });
  },
  
  /**
   * Deletes workout
   * @returns {json}
   */
  deleteWorkout: function deleteWorkout(request, reply) {
    const id = request.params._id;
    // console.log(JSON.stringify(request));
    workouts.deleteWorkout(id)
      .then((deleted) => {
        // return reply.view('update.html', {insert: inserted});
        return reply(deleted);
      })
      .catch((err) => {
        return reply(err);
      });
  },
  
  /**
   * Gets multiple workouts by movement
   * @param {string} movement
   * @returns {json}
   */
  getWorkoutByMovement: function getWorkoutByMovement(request, reply) {
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
  },
  
  /**
   * Gets single workout
   * @returns {json}
   */
  getRandomGirlsWorkout: function getRandomGirlsWorkout(request, reply) {
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
};

module.exports = routeHandler;