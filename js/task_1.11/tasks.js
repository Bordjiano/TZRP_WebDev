//  Task 1
function seconds(total) {
    return total % 60
}

//  Task 2
function perimeter(side, count){
    return side * count
}

//  Task 3
function task3(n){
    for (let i = 1; i < n; i++){
        if (i % 3 === 0 && i % 5 === 0)
            console.log("fizzbuzz")
        else if (i % 3 === 0)
            console.log("fizz")
        else if (i % 5 === 0)
            console.log("buzz")
        else
            console.log(i)
    }
}

//  Task 4
function Calculate(a, b, c){
    return (a + b + c) / 3
}

//  Task 5
function isDivisible(n, x, y){
    // n % x === 0 && n % y === 0 ? true : false
    return n % x === 0 && n % y === 0
}

//  Task 6
function task6(n){
    let arr = []
    let sum = 0, min = 0, max = 0
    for (let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 30)
        sum += arr[i]
        min = Math.min(arr[i], min)
        max = Math.max(arr[i], max)
    }
    console.log({min, max, sum, avg: sum / n})
}
