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

server.route(Routes);

server.start(function (err) {
  if (err) console.log(err);
  console.log('Server running at:', server.info.uri);
  server.log('Server running at:', server.info.uri);
});
