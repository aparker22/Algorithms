var givenArray = [[false, false, false], [true, true, true], [false, false, false]];
var nextDayArray = [[null, null, null], [null, null, null], [null, null, null]];

var length = givenArray.length;
var width = givenArray[0].length;



var comparison = function (cell, i, j) {
    var newArray = []
    for (var k=0; k<length; k++) {
        for (var l=0; l<width; l++) {
            if (i === k && j === l) {
                // console.log('Same Location');
            } else {
                if ((k === (i+1) || k === (i-1) || k === i) && (l === (j+1) || l === (j-1) || l === j)) {
                        newArray.push(givenArray[k][l]);
                }
        }
    }
}
    return newArray;

}

var trueCount = function (cellstouchingArray) {
    var trueCounter = 0
    var falseCounter = 0
    for (var i = 0; i < cellstouchingArray.length; i++) {
        if (cellsTouchingArray[i] === true) {
            trueCounter++;
        } else {
            falseCounter++;
        }
    }
    var result = [trueCounter, falseCounter];
    return result;
}

var liveOrDie = function(result, cell) {
    var newCell
    if (cell === true) {
        if (result[0] < 2) {
            newCell = false;
        } else if (result[0] > 3) {
            newCell = false;
        } else if (result[0] === 2 || result[0] === 3) {
            newCell = true;
    }
    } else {
        if (result[0] === 3) {
            newCell = true;
        } else {
            newCell = false;
        }
    }
return newCell;
}



for (var i=0; i<length; i++) {
    for (var j=0; j<width; j++) {

        var cell = givenArray[i][j]
        var cellsTouchingArray = comparison(cell, i, j);
        var result = trueCount(cellsTouchingArray);
        var newCell = liveOrDie(result, cell);
        nextDayArray[i][j]=newCell;



    }
}
  

console.log(nextDayArray);