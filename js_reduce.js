var data = [15, 3, 20];

var reducer = function (accumulater, item) {
  return accumulater + item;
}

var initialValue = 0;
var total = data.reduce (reducer, initialValue)'

console.log("The sum is", total);
