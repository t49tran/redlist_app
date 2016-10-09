var fs = require("fs");

class FileReader{
    constructor(){
    }

    async stat(file) {
        return fs.stat(file);
    }

    async readFile(file) {
        return fs.readFile(file);
    }
}

export {FileReader};