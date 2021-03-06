import { Server } from 'yoshi-server';
import { Router } from 'express';

const bootstrap = require('@wix/wix-bootstrap-ng');

bootstrap()
  .express(async (app: Router, context: any) => {
    const server = await Server.create(context);

    app.all('*', server.handle);

    return app;
  })
  .start({
    disableCluster: true,
  });
