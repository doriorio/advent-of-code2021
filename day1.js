var input = document.querySelector('pre');
input = input.innerText.split('\n')

const greaters = input.filter(function(num, idx) {
    if (num > input[idx-1]) {
        return num;
    }
});

var howMany = greaters.length + 1;

console.log(howMany);