var fs = require("fs");

class FileReader{
    constructor(){
    }

    async stat(file) {
        return await fs.stat(file, done);
    }

    async readFile(file) {
        return await fs.readFile(file,done);
    }
}

export {FileReader};