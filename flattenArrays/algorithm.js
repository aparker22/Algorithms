var inputArray = [1, [2], [3, [[4]]]];
var newArray = [];

var arrayCheck = function (item) {
    if (Array.isArray(item)) {
        item.forEach(function(element) {
            arrayCheck(element);
        });
    } else {
        newArray.push(item);
    }
    return newArray;
};

console.log(arrayCheck(inputArray));


