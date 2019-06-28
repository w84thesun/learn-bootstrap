// index.js
import moment from 'moment';
import './scss/base.scss';
console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
const name = "Jade", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
