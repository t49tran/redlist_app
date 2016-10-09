var fs = require("fs");
var Promise = require("bluebird");

Promise.promisifyAll(fs);

class FileReader{
    constructor(){
    }

    stat(file) {
        return fs.statAsync(file);
    }

    readFile(file) {
        return fs.readFileAsync(file);
    }
}

export {FileReader};
