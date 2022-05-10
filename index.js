const server = require('./server.js');

const startServer = async () => {
  try {
    const config = {
      host: 'localhost',
      port: 8080,
    };
    const app = await server(config);

    // await app(config);
  } catch (err) {
    console.log('server error', err);
  }
};

startServer();
