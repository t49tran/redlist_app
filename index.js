import 'babel-polyfill';
import Koa from 'koa';

import routes from 'app/config/routes.js';
import pgPool from 'app/config/database_pg';

var app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello world';
});

app.listen(3001);
