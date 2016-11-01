const _ = require('lodash');
const Hopper = require('./hopper');
const Workout = require('./workoutModel');
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

const hopper = new Hopper();
const buckets = ['girls','heroes'];
console.log('Workout options:');
process.stdin.on('data', function (text) {
  console.log('picked:', util.inspect(text));
  if (text === 'quit\n') {
    done();
  }else if (text === 'spin\n'){
    spin();
  }else if (/\d+/.test(text)) {
    console.log(`selection: ${text}`);
  }else{
    console.log('no selection');
  }
});

function spin() {
  hopper.spin().then((result) => {
    let wkt = new Workout(result);
    console.log('--------------');
    console.log(`workout picked: ${wkt.name}`);
    console.log(wkt);
    console.log(`Total reps: ${wkt.getReps()}`);
  });
}
