const fs = require('fs');

const data = fs.readFileSync("./data.txt" , "utff8");
console.log(data);