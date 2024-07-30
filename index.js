import {greet} from './greet.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';


console.log(greet('Nwelo'));

// const styledMessage = chalk.bgGreen.black(greet('Nwelo'));
// console.log(styledMessage)

// console.log(chalk.bgYellow.bgBlue(greet('Nwelo')));

console.log(chalk.bgGreen.white(cowsay.say({
    text: "Hello, Nwelo!"
})));
console.log(chalk.bgGreen.black(greet('Nwelo')));
figlet('Hello, Nwelo!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});