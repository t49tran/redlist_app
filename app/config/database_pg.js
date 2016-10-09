/**
 * Setting up Postgres Pool here
 */
import {FileReader} from "./../helpers/FileReader";

var PgNative = require('pg').native;

var Pool = PgNative.Pool;

var fileReader = new FileReader();

var stats = fileReader.stat("parameters.json");
var parameters = fileReader.readFile("parameters.json");

console.log(stats);
console.log(parameters);

var pgPool = {};

if(parameters){
    pgPool = new Pool(parameters.database);
}

export default pgPool;

