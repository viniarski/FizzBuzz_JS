const n = parseInt(prompt('Enter a number:'));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let x = '';
    if (i % 3 == 0) x += 'Fizz';
    if (i % 5 == 0) x += 'Buzz';
    console.log(x || i.toString());
  }
}

fizzBuzz(n);
