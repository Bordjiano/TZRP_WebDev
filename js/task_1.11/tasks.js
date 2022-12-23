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

//  Task 7
function task7(){
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++){
            arr[i][j] = Math.floor(Math.random() * 30 - 15)
            if (i === j){
                if (arr[i][j] > 0)
                    arr[i][j] = 1
                else
                    arr[i][j] = 0
            }
        }
    }
    console.log(arr)
}

//  Task 8
function main(a = parseInt(prompt()), b = parseInt(prompt()) , c = prompt()){
    if (c === "+")
        return a + b
    else if (c === "-")
        return a - b
    else if (c === "*" && b !== 0)
        return a / b
    else if (c === "*")
        return a * b
    else
        return "Error"
}

//  Task 9
function task9(n){
    //  Positive or Negative
    if (n > 0)
        console.log("Positive")
    else if (n < 0)
        console.log("Negative")
    else
        console.log("Zero")

    //  Keep number
    if(n === 2 || n === 3)
        console.log("Keep number")
    else if (i % 2 !== 0 && i % 3 !== 0)
        console.log("Keep number")
    else
        console.log("Not keep number")

    //  Div on 2, 3, 5, 6, 9
    if (n % 2 === 0)
        console.log("+")
    else
        console.log("-")
    if (n % 3 === 0)
        console.log("+")
    else
        console.log("-")
    if (n % 5 === 0)
        console.log("+")
    else
        console.log("-")
    if (n % 6 === 0)
        console.log("+")
    else
        console.log("-")
    if (n % 9 === 0)
        console.log("+")
    else
        console.log("-")
}

//  Task 10
function task10(arr){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "string" || typeof arr[i] !== "symbol" || typeof arr[i] !== "boolean" || typeof arr[i] !== "object"){
            arr[i] = Math.pow(arr[i], 2)
        }
    }
    console.log(arr)
}

//  Task 11
function task11(arr) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }
    console.log(Array.of(set))
}