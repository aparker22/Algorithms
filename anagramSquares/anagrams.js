let fs = require('fs');
let promisify = require('util').promisify;
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);

let regex = /"([A-Z]+)"/

readFile('words.txt')
.then (function(data) {
    var matches = (regex.exec(data)).input;
    console.log(matches.split(","));  
})

