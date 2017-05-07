const _ = require('lodash');
const Promise = require('bluebird');
const fs = require('fs');
const workouts = require('../data/workouts');

let totalWorkouts;
workouts.getCount().then((count) => {
  totalWorkouts = count;
});

class Hopper {
  get TYPE() { return 'Hopper'}
  get description() { return 'random workout selector'}

  /**
   * Selects random workout
   * @returns {Promise}
   */
  spin() {
    return new Promise((resolve, reject) => {
      return this._getRandomNum().then((result) => {
        return result;
      }).then(
        (picked) => {
          workouts.getWorkoutById(picked).then((wkt) => {
            resolve(wkt[0]);
          });
        }
      ).catch((err) => {
          console.log(err);
          reject(err);
        } 
      );
    });
  }

  /**
   * Outputs workout by name
   * @param {string} name
   */
  selectByName(name){
    return new Promise((resolve,reject) => {
      workouts.getNamedWorkout(name).then((wkt) => {
        if (wkt[0]) {
          resolve(wkt[0]);
        } else {
          reject(`no workout found by name: ${name}`);
        }
      });
    });
  }

  /**
   * Outputs workout by movement category
   * @param movement
   * @returns {Array}
   */
  selectByMovement(movement){
    return new Promise((resolve, reject) => {
      workouts.getWorkoutByMovment(movement).then((wkts) => {
        if (wkts) {
          resolve(wkts);
        } else {
          reject(`no workouts found for ${movement}`);
        }
      });
    });
  }

  /**
   * Pick a randomly selected number not already selected
   * @param list
   * @returns {Promise}
   */
  _getRandomNum() {
    const randomNum = Math.floor(Math.random() * totalWorkouts);
    return new Promise((resolve, reject) => {
      if (_.isNumber(randomNum)) {
        resolve(randomNum + 1);
      } else {
        reject('[_getRandomNum] error generating random number');
      }
    });
  }
};

module.exports = Hopper;
