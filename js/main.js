function isDivisible(num, divisor) {
    return num % divisor === 0;
}

for (let i = 1; i <= 100; i++) {
    if (isDivisible(i, 3) && isDivisible(i, 5)) {
        console.log("FizzBuzz");
    } else if (isDivisible(i, 3)) {
        console.log("Fizz");
    } else if (isDivisible(i, 5)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}