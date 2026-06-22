const fs = require('fs');
const sizeOf = require('image-size');
const dimensions = sizeOf('public/images/arnold.png');
console.log(dimensions);
