const mongojs = require('mongojs');
const db = mongojs('test', ['workouts']);
db.on('error', function (err) {
  console.log('database error', err);
});

db.on('connect', function () {
  console.log('database connected');
});

const workouts = {
  getCount: () => {
    return new Promise((resolve, reject) => {
      db.workouts.count(function (err, count) {
        if (err) reject(err);
        resolve(count);
      });
    });
  },
  getAllDocs: () => {
    return new Promise((resolve, reject) => {
      db.workouts.find((err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    })
  },
  getNamedWorkout: (name) => {
    return new Promise((resolve, reject) => {
      db.workouts.find({name: name}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  },
  createWorkout: (workout) => {
    return new Promise((resolve, reject) => {
      db.workouts.insert(workout, (err, inserted) => {
        if (err) reject(err);
        resolve(inserted);
      });
    });
  },
  getWorkoutByMovment: (movement) => {
    return new Promise((resolve, reject) => {
      db.workouts.find({movements: movement}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  },
  getWorkoutById: (id) => {
    return new Promise((resolve, reject) => {
      db.workouts.find({id: id}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  }
};

module.exports = workouts;