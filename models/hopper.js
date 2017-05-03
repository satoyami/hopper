const _ = require('lodash');
const Promise = require('bluebird');
// const workouts = require('./../data/girls.json');
const fs = require('fs');
const picks = [12,2,4,7,5];
const workouts = require('../data/workouts');

let totalWorkouts
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
    // let trimPicks = prevPicks || [];
    let oldPicks = [];
    return new Promise((resolve, reject) => {
      return this._getRandomNum().then((result) => {
        console.log('1111', result);
        return result;
      }).then(
        (picked) => {
          console.log('2222', picked);
          workouts.getWorkoutById(picked).then((wkt) => {
            console.log('5555', JSON.stringify(wkt));
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
    const filterWorkouts = _.filter(workouts.data, (wkt) => {
      return _.includes(wkt.movements, movement);
    });
    
    return new Promise((resolve, reject) => {
      if (filterWorkouts) {
        resolve(filterWorkouts);
      } else {
        reject(`no workouts found for ${movement}`);
      }
    });
  }

  /**
   * Update pick.json file to keep track of last selected
   * @param pick
   * @returns {file}
   */
  _storeSelection(pick) {
    // replace with data from cookie
    fs.writeFile("./pick.json", pick, function(err) {
        if(err) throw err;
        return pick;
    });
  }

  /**
   * Pick a randomly selected number not already selected
   * @param list
   * @returns {Promise}
   */
  _getRandomNum() {
    const randomNum = Math.floor(Math.random() * totalWorkouts);
    console.log('0000', totalWorkouts);
    return new Promise((resolve, reject) => {
      if (_.isNumber(randomNum)) {
        resolve(randomNum);
      } else {
        reject('[_getRandomNum] error generating random number');
      }
    });
  }
  // _getRandomNum(list) {
  //   const wktArr = [];
  //   let index = 0;
  //   while(index < workouts.data.length) {
  //     wktArr.push(index);
  //     index++;
  //   }
  //
  //   const uniqList = _.difference( wktArr, _.uniq(list));
  //   const randomNum = Math.floor(Math.random() * uniqList.length);
  //
  //   return new Promise((resolve, reject) => {
  //     if (_.isNumber(randomNum)) {
  //       resolve(uniqList[randomNum]);
  //     } else {
  //       reject('[_getRandomNum] error generating random number');
  //     }
  //   });
  // }

  /**
   * Truncate previously picked number array
   * @param {number[]} list Array of numbers from previously selected
   * @returns {Promise} truncated list
   */

  _trimPicks(list) {
    const half = totalWorkouts/2;
    return new Promise((resolve,reject) => {
      if (!_.isEmpty(list)) {
        if (list.length < half) {
          resolve(list);
        } else {
          resolve(list.slice(-(half)));
        }
      } else {
        resolve(list);
      }
    });
  }

  _resetPicksFile() {
    let reset = "{\"data\":[]}";
    fs.writeFile("./pick.json", reset, function(err) {
        if(err) {
            return console.log(err);
        }
        return pick;
    });
  }
};

module.exports = Hopper;
