const n = prompt()
console.log("90deg")
for (let i = 1; i <= n; i++){
    console.log("*".repeat(i))
}
console.log("Piramida")
let draw = 1
for (let i = 1; i <= n; i++){
    const count_space = n - i
    console.log(" ".repeat(count_space) + "*".repeat(draw) + " ".repeat(count_space))
    draw += 2
}
console.log("Romb")