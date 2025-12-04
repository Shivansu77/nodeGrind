const fs = require('fs');
const a = 100;
setImmediate(() => {
    console.log('setImmidiate called');
});
fs.readFile('somefile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Reading file CB');
});

setTimeout(() => console.log('setTimeout called'),0);

function printA(){
    console.log("a=",a);
}
printA();
console.log('Last line of the file');