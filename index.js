// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Equality - Please check the Browser Console</h1>`;

const calculateEquals = (lhs, rhs) => {
    return lhs == rhs;
}

const calculateStrictEquals = (lhs, rhs) => {
  return lhs === rhs;
}

const calculateObjectIs = (lhs, rhs) => {
  return Object.is(lhs, rhs);
}

console.log('======== true and 0 ========');
console.log("calculateEquals", calculateEquals(true, 0));
console.log("calculateStrictEquals", calculateStrictEquals(true, 0));
console.log("calculateObjectIs", calculateObjectIs(true, 0));

console.log('======== 0 and -0 ========');
console.log("calculateEquals", calculateEquals(0, -0));
console.log("calculateStrictEquals", calculateStrictEquals(0, -0));
console.log("calculateObjectIs", calculateObjectIs(0, -0));

console.log('======== NaN and NaN ========');
console.log("calculateEquals", calculateEquals(NaN, NaN));
console.log("calculateStrictEquals", calculateStrictEquals(NaN, NaN));
console.log("calculateObjectIs", calculateObjectIs(NaN, NaN));


