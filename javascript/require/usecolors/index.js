// Note we used npm link ../colors to add this dependency from the colors folder containing this module
const colors = require('colors');

const chosenColor = colors.getRandomColor();
console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);

const favoriteColor = colors.getBlue();
console.log(`My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`);