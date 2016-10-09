/**
 * Setting up Postgres Pool here
 */
import {FileReader} from "./../helpers/FileReader";

let PostgresConfig = async function(){
    var PgNative = require('pg').native;
    var Pool = PgNative.Pool;

    var fileReader = new FileReader();

    console.log(__dirname);

    var stats = await fileReader.stat(__dirname+"/parameters.json");
    var parameters = await fileReader.readFile(__dirname+"/parameters.json");

    console.log("File stats:");
    console.log(stats);

    console.log("Parameters:");
    console.log(parameters);

    var pgPool = {};

    if(parameters){
        pgPool = new Pool(parameters.database);
    }
};

export default PostgresConfig;

