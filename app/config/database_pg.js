/**
 * Setting up Postgres Pool here
 */
import {FileReader} from "./../helpers/FileReader";

var PgNative = require('pg').native;

var Pool = PgNative.Pool;

var fileReader = new FileReader();

var parameters =  fileReader.readFile("parameters.json");

var pgPool = {};

if(parameters){
    pgPool = new Pool(parameters.database);
}

console.log(parameters);

export default pgPool;

