const data = new Date()
console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleDateStringg())
console.log(data.toLocaleString())
console.log(data.toUTCString())
console.log(data.toLocaleDateString("pt-BR", {month:"long", weekday: "long",
    day: "numeric", year:"numeric"
}))