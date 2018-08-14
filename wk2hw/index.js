'use strict';
var fs = require('fs');

var helpText = `Welcome to my CLI to do list app
*****************************
Instructions:
help - shows instructions 
list - shows current to dos
add + 'string' - adds to current to dos 
remove + index - removes specific item
rest - resets whole list
*****************************`;

console.log('Your To Do List: ');

let input = process.argv[2];
let item = process.argv[3]

const fileName = 'toDoList.json'

let items
try {
    const rawData = fs.readFileSync(fileName, { encoding: 'UTF8' });
    items = JSON.parse(rawData);
} catch (e) {
    items = [];
}

console.log(JSON.stringify(items));

switch (input) {
    case 'add':
        items.push(item);
        break;
        case 'remove':
           items.splice(item, 1)
            console.log('you have removed one item from your list');
        break;

    case 'list':
        console.log(JSON.stringify(items))
        return;

    case 'reset':
        items = []
        break;

    case 'help':
    default:
        console.log(helpText);
        return;
};

fs.writeFile(fileName, JSON.stringify(items));