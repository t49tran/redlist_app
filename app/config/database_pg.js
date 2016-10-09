/**
 * Setting up Postgres Pool here
 */
var PgNative = require('pg').native;

var Pool = PgNative.Pool;

var FileReader = require('../helpers/FileReader');

var fileReader = new FileReader();

var parameters =  fileReader.readFile("parameters.json");

var pgPool = {};

if(parameters){
    pgPool = new Pool(parameters.database);
}

console.log(parameters);

export default pgPool;

