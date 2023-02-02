import * as k from '../src/index';

const modifiers = ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough'];
const colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];
const lightColors = ['lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightGray'];
const bgColors = ['bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgGray'];
const bgLightColors = ['bgLightRed', 'bgLightGreen', 'bgLightYellow', 'bgLightBlue', 'bgLightMagenta', 'bgLightCyan'];

console.log(modifiers.map(m => k[m](m)).join(' '));
console.log(colors.map(m => k[m](m)).join(' '));
console.log(lightColors.map(m => k[m](m)).join(' '));
console.log(bgColors.map(m => k[m](m)).join(' '));
console.log(bgLightColors.map(m => k[m](m)).join(' '));
