const Path = require('path');
const _ = require('lodash');
const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server();

const Hopper = require('./hopper');
const Workout = require('./models/workoutModel');

const hopper = new Hopper();

// hopper.spin().then((result) => {
//   let wkt = new Workout(result);
//   console.log('--------------');
//   console.log(`workout picked: ${wkt.name}`);
//   console.log(wkt);
//   console.log(`Total reps: ${wkt.getReps()}`);
// });

// PLUGINS
server.register(Vision, function (err) {
  if (err) throw err;
});

server.views({
  engines: {
    html: Handlebars
  },
  path: Path.join(__dirname, 'views')
});

server.connection({
  host: '127.0.0.1',
  port: 5555
});

function getWorkoutByName(request, reply) {
  const name = request.params.name.toLowerCase();
  let wod = {};
  hopper.selectByName(name).then((result) => {
    console.log(name);
    const wkt = new Workout(result);
    wod.name = wkt.name;
    wod.media = wkt.linksToMovement;
    wod.body = JSON.stringify(wkt);
    wod.reps = wkt.getReps();
    // reply.view('index.html', {title: name, workout: wod});
    reply(wod);
  }).catch(err => reply(err));
}

function getRandomGirlsWorkout(request,reply) {
  // console.log(request.headers);
  let wod = {};
  hopper.spin().then((result) => {
    const wkt = new Workout(result);
    wod.name = wkt.name;
    wod.media = wkt.linksToMovement;
    wod.body = JSON.stringify(wkt);
    wod.reps = wkt.getReps();
    reply.view('index', { title: 'Hapi', workout: wod });
    // reply(wod);
  }).catch(err => reply(err));
}

server.route({
    path: '/{name}',
    method:'GET',
    handler: getWorkoutByName
  }
);

server.route({
    path: '/randomgirls',
    method:'GET',
    handler: getRandomGirlsWorkout
  }
);




server.start(function (err) {
  if (err) console.log(err);
  console.log('Server running at:', server.info.uri);
  server.log('Server running at:', server.info.uri);
});
