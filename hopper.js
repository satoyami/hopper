const _ = require('lodash');
const Promise = require('bluebird');
const workouts = require('./data/girls');
const fs = require('fs');
const picks = require('./pick.json');

const totalWorkouts = workouts.length;

class Hopper {
  get TYPE() { return 'Hopper'}
  get description() { return 'random workout selector'}

  /**
   * Selects random workout
   * @returns {Promise.<TResult>}
   */
  spin() {
    let previousPicks = [];
    return this._trimPicks(picks).then(
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
          this._storeSelection(`{ "data": [${previousPicks}] }`);
          return workouts[picked];
        }
      ).catch((err) => console.log(err) );
  }

  /**
   * Outputs workout by name
   * @param {string} name
   */
  selectByName(name){
    return new Promise((resolve,reject) => {
      return _.find(workouts, (wkt) => {
        if(wkt.name === name) {
          return resolve(wkt);
        }else{
          return reject({error: 'invalid name'});
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
    return _.filter(workouts, (wkt) => {
      return _.includes(wkt.movements, movement);
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
    return new Promise((resolve,reject) => {
      if(_.includes(uniqList, randomNum)){
        return resolve(this._getRandomNum(list));
      }else{
        // console.log(`picked ${randomNum}`)
        return resolve(randomNum);
      }
    });
  }

  /**
   * Truncate previously picked number array
   * @param {number[]} list Array of numbers from previously selected
   * @returns {Promise} truncated list
   */

  _trimPicks(list) {
    let half = totalWorkouts/2;
    return new Promise((resolve,reject) => {
      if(list.data.length < half){
        return resolve(list.data);
      }else{
        return resolve(list.data.slice(-(half)));
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
