import express, { Router } from 'express';
import http from 'http';
import services from './services';
import response from './Middlewares/response';

const PORT = 3000;
const app = express();
const router = Router();
const server = http.createServer(app);

services.forEach(service => {
  service.routes.forEach(route => {
    const fullUri  = route.uri !== null ? `/${service.baseUri}/${route.uri}` : `/${service.baseUri}`;
    let callbacks = [];
    route.callbacks.forEach(callback => {
      const required = require(`./services/${service.service}/${callback}`);
      callbacks.push(
        required.default
      );
    });
    callbacks.push(response);
    router[route.method](
      fullUri,
      callbacks
    );
    app.use(`/${service.name}`, router);
  });
});
server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});