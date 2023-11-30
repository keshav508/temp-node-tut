
// npm - global command
//npm --version

//local dependency
//npi i <packagename>

//global dependency
//npi install -g <packagename>

//package.json - manifest file stores impt info
// manual approach (create package.json in the root, create props etc)
// npm init (step by step)
// npm init -y


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);