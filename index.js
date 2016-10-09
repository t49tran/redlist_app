import 'babel-polyfill';
import 'babel-register';

import Koa from 'koa';

import routes from './app/config/routes.js';
import PostgresConfig from './app/config/database_pg';

var Postgres = PostgresConfig();

var app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello world';
});

app.listen(3001);
