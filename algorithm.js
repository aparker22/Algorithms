var inputArray = [1, [2], [3, [[4]]]];
var newArray = [];


var arrayCheck = function (item) {
    if (item.length === undefined) {
        newArray.push(item);
    } else {
        for (var i=0; i < item.length; i++) {
            arrayCheck(item[i]);
        }
    }
};

arrayCheck(inputArray);
console.log(newArray);


