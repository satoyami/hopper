const Path = require('path');
const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');
const Routes = require('./routes');

const server = new Hapi.Server();

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

server.state('prev_picks', {
  ttl: null,
  domain: '127.0.0.1',
  path: '/randomgirls',
  clearInvalid: false,
  isHttpOnly: false,
  strictHeader: false,
  ignoreErrors: false,
  // isSameSite: 'Strict',
  encoding: 'base64json'
});

server.route(Routes);

server.on('request-internal', (request, event, tags) => {
  
  if (tags.error && tags.state) {
    console.error(event);
  }
});

server.start(function (err) {
  if (err) console.log(err);
  console.log('Server running at:', server.info.uri);
  server.log('Server running at:', server.info.uri);
});
