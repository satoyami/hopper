const _ = require('lodash');
const moment = require('moment');
const Promise = require('bluebird');
const workouts = require('./data/girls');
const fs = require('fs');
const picks = require('./pick.json');

const totalWorkouts = workouts.length;

class Hopper {
  get TYPE() { return 'Hopper'}
  get description() { return 'random workout selector'}

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
      ).catch( err => console.log(err) );
  }

  _storeSelection(pick) {
    fs.writeFile("./pick.json", pick, function(err) {
        if(err) throw err;
        return pick;
    });
  }

  _getRandomNum(list) {
    let randomNum = Math.floor(Math.random() * totalWorkouts);
    let uniqList = _.uniq(list);
    return new Promise((resolve,reject) => {
      if(_.includes(uniqList, randomNum)){
        return resolve(this._getRandomNum(list));
      }else{
        // console.log(`picked ${randomNum}`)
        return resolve(randomNum);
      }
    });
  }

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
