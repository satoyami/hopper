const _ = require('lodash');
const moment = require('moment');
const Promise = require('bluebird');
const workouts = require('./workouts');
const fs = require('fs');
const picks = require('./pick.json');

const totalWorkouts = Object.keys(workouts).length;
const selection = Object.keys(workouts);

const storePick = (pick) => {
  fs.writeFile("./pick.json", pick, function(err) {
      if(err) throw err;
      return pick;
  });
}

const getRandomNum = (list) => {
  let randomNum = Math.floor(Math.random() * totalWorkouts);
  let uniqList = _.uniq(list);
  // console.log(uniqList);
  // console.log(randomNum);
  return new Promise((resolve,reject) => {
    if(_.includes(uniqList, randomNum)){
      return resolve(getRandomNum(list));
    }else{
      // console.log(`picked ${randomNum}`)
      return resolve(randomNum);
    }
  });
}

const trimPicks = (list) => {
  let half = totalWorkouts/2;
  return new Promise((resolve,reject) => {
    if(list.data.length < half){
      return resolve(list.data);
    }else{
      return resolve(list.data.slice(-(half)));
    }
  });
}

const resetPicksFile = () => {
  let reset = "{\"data\":[]}";
  fs.writeFile("./pick.json", reset, function(err) {
      if(err) {
          return console.log(err);
      }
      return pick;
  });
}
let previousPicks;
let randomNum;
let hopper = {
  selectPick: () => {
    return trimPicks(picks).then(
        (list) => {
          previousPicks = list;
          return getRandomNum(list);
        }
      ).then(
        (num) => {
          previousPicks.push(num);
          return num;
        }
      ).then(
        (picked) => {
          storePick(`{ "data": [${previousPicks}] }`);
          return selection[picked];
        }
      );
  },
  resetPicksFile: () => {
    let reset = "{\"data\":[]}";
    fs.writeFile("./pick.json", reset, function(err) {
        if(err) {
            return console.log(err);
        }
        return pick;
    });
  }
};

module.exports = hopper;
