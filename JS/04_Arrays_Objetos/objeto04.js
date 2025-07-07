function Task(){
    this.name = "task1"
    this.createdAt = new Date()
    this.changeName = function(name){
        this.name = name
    }
}

const task1 = new Task()
console.log(task1)
task1.changeName("task1 atualizada")
console.log(task1)
tasnk1.name = "atualizada"
console.log(task1)