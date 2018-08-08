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

userInput = process.argv[2];

switch (userInput) {

    case 'help':
        console.log(helpText);
        break;

    case 'list':
        fs.readFile("toDoList.txt", (err, data) => {
            if (err) {
                console.log("To do list is empty");
            } else {
                console.log(data);
            }
        });
        break;

    case 'add':
        fs.appendFile('toDoList.txt', process.argv[3] + '\n', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('List Updated!');
            }
        });

        break;

    case 'reset':
        fs.unlink('toDoList.txt', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('To do list Reset');
            }
        });

        break;

    default:
        console.log(helpText);
}