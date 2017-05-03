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
      return db.workouts.count(function (err, count) {
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
  getWorkoutById: (id) => {
    const idFormatted = id;
    console.log('3333', idFormatted);
    return new Promise((resolve, reject) => {
      db.workouts.find({id: idFormatted}, (err, docs) => {
        if (err) reject(err);
        console.log('4444', JSON.stringify(docs));
        resolve(docs);
      });
    });
  }
};

module.exports = workouts;