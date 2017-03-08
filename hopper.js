const _ = require('lodash');
const Promise = require('bluebird');
const workouts = require('./data/girls.json');
const fs = require('fs');
const picks = [12,2,4,7,5];

const totalWorkouts = workouts.data.length;

class Hopper {
  get TYPE() { return 'Hopper'}
  get description() { return 'random workout selector'}

  /**
   * Selects random workout
   * @returns {Promise}
   */
  spin() {
    let previousPicks = [];
    return new Promise((resolve, reject) => {
      this._trimPicks(picks).then(
        (list) => {
          previousPicks = list;
          return this._getRandomNum(list);
        }
      ).then(
        (num) => {
          previousPicks.push(num);
          return num;
        }
      ).then(
        (picked) => {
          picks.push(picked);
          return resolve(workouts.data[picked]);
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
      const workoutByName = _.find(workouts.data, (wkt) => {
        return wkt.name === name;
      });
      if (workoutByName) {
        return resolve(workoutByName);
      } else {
        return reject(`no workout found by name: ${name}`);
      }
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
  _getRandomNum(list) { 
    const randomNum = Math.floor(Math.random() * totalWorkouts);
    const uniqList = _.uniq(list);

    return new Promise((resolve, reject) => {
      if (!_.includes(uniqList, randomNum)) {
        resolve(randomNum);
      } else {
        this._getRandomNum(list);
      }
    });
  }

  /**
   * Truncate previously picked number array
   * @param {number[]} list Array of numbers from previously selected
   * @returns {Promise} truncated list
   */

  _trimPicks(list) {
    const half = totalWorkouts/2;
    return new Promise((resolve,reject) => {
      // if (!_.isEmpty(list)) reject('picks list error');
      
      if(list.length < half){
        resolve(list);
      }else{
        resolve(list.slice(-(half)));
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
