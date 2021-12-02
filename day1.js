//All purpose 
const getInput = () => {
    var input = document.querySelector('pre');
    input = input.innerText.split('\n')
    return input;
};


// Part 1
/** 
 * Day one challenge - see how many measurements are greater than
 * the previous measurement
 */
function partOne() {
    let input = getInput();
    const greaters = input.filter(function(num, idx) {
        if (num > input[idx-1]) {
            return num;
        }
    });
    
    var howMany = greaters.length + 1;
    return howMany;
}
var partOneAnswer = partOne();
//partOneAnswer = 1553;
//Pt 2

function partTwo() {
    let input = getInput();

    var inputArr = [];
    
    for (var i=0; i<=input.length; i++) {

        var current = input.slice(i, i+3);

        console.log(current);
        if (current.length == 3) {

            var sum = current.reduce((prev, num) => parseInt(prev)+parseInt(num));
    
            inputArr.push(sum);
        }

    };

    console.log(inputArr);

    const greaters = inputArr.filter(function(num, idx) {
        if (num > inputArr[idx-1]) {
            return num;
        }
    });

    console.log(greaters.length);
    return greaters.length;


}
var partTwoAnswer = partTwo();
//1597
