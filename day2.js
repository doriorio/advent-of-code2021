//All purpose 
const getInput = () => {
    var input = document.querySelector('pre');
    input = input.innerText.split('\n');


    return input;
};


//sub commands: forward X - increase horizontal by X, down X increases depth by X, up X decreases depth by X
//horizontal: forward
//depth: down, up

//initial position = 0 horizontal / 0 depth
var partOne = function() {
    const input = getInput();

    var horizontal = 0;
    var depth = 0;

    var addToDimensions = function(instance, num) {
        if (!instance) return;
        if (instance.indexOf('forward') !== -1) {
            horizontal += num;
        } else if (instance.indexOf('down') !== -1) {
            depth += num;
        } else {
            depth -= num;
        }
        var args = JSON.stringify({...arguments})
        console.log(` horizontal is  ${horizontal}  + depth is ${depth} + input was ${args}`);
    }

    input.forEach(function(item) {
        var num = parseInt(item[item.length - 1]);

        addToDimensions(item, num);
    });

    return horizontal * depth;

}

var partOneAnswer = partOne();
//1714680


//third value - AIM
//
//Down X- increases aim by x units
//Up X- decreases aim by x units
//Forward X- 
    //increases horizontal position by x
    //increases depth by aim multiplied by X
var partTwo = () => {
    var horizontal  = 0;
    var aim = 0;
    var depth = 0;

    const input = getInput();

    var addToDimensions = function(instance, num) {
        if (!instance) return;
        if (instance.indexOf('forward') !== -1) {
            horizontal += num;
            depth += aim*num;
        } else if (instance.indexOf('down') !== -1) {
            aim += num;
        } else {
            aim -= num;
        }
        var args = JSON.stringify({...arguments})
    }

    input.forEach(function(item) {
        var num = parseInt(item[item.length - 1]);

        addToDimensions(item, num);
    });

    return horizontal * depth;



}

var partTwoAnswer = partTwo();

//1963088820