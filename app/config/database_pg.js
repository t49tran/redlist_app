/*
 * Setting up Postgres Pool here
 */
import {FileReader} from "./../helpers/FileReader";

let PostgresConfig = async function(){
    var PgNative = require('pg').native;
    var Pool = PgNative.Pool;

    var fileReader = new FileReader();

    var stats = await fileReader.stat(__dirname+"/parameters.json");
    
    var parameters = await fileReader.readFile(__dirname+"/parameters.json");
    parameters = JSON.parse(parameters);


    var pgPool = {};

    if(parameters){
        pgPool = new Pool(parameters.database);
        
        pgPool.connect(function(response,err,done){
             if(err){
                  console.log(err);
             }else{
                  console.log(response);
             }
             done();
        });
    }
};

export default PostgresConfig;

