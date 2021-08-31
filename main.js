function Human(name, hairColor, eyeColor, weight, height) {
    this.name = name
    this.hairColor = hairColor
    this.eyeColor = eyeColor
    this.weight = weight
    this.height = height
}

Human.prototype.speaking = function() {
    console.log(`${this.name} can talk!`)
}
Human.prototype.physicalActivity = function() {
    console.log(`${this.name} can walk, run, jump ...!`)
}

function Man(name, hairColor, eyeColor, weight, height) {
    Human.call(this, name, hairColor, eyeColor, weight, height)
}

Man.prototype = Object.create(Human.prototype)
Man.prototype.constructor = Man

function Woman(name, hairColor, eyeColor, weight, height) {
    Human.call(this, name, hairColor, eyeColor, weight, height)
}

Woman.prototype = Object.create(Human.prototype)
Woman.prototype.constructor = Woman

function Hunter(name, hairColor, eyeColor, weight, height, victim, favotitePlace) {
    Man.call(this, name, hairColor, eyeColor, weight, height)
    this.victim = victim
    this.favotitePlace = favotitePlace
}

Hunter.prototype = Object.create(Man.prototype)
Hunter.prototype.constructor = Hunter

Hunter.prototype.dog = function() {
    console.log(`${this.name} has a dog`)
}

function Worker(name, hairColor, eyeColor, weight, height, position, company) {
    Man.call(this, name, hairColor, eyeColor, weight, height)
    this.position = position
    this.company = company
}

Worker.prototype = Object.create(Man.prototype)
Worker.prototype.constructor = Worker

Worker.prototype.workInfo = function(){
    console.log(`${this.name} works for ${this.company} at the position of ${this.position}`);
}

function Librarian(name, hairColor, eyeColor, weight, height, favoriteBook) {
    Woman.call(this, name, hairColor, eyeColor, weight, height)
    this.favoriteBook = favoriteBook
}

Librarian.prototype = Object.create(Woman.prototype)
Librarian.prototype.constructor = Librarian

Librarian.prototype.like = function() {
    console.log(`${this.name}'s favorite book is ${this.favoriteBook}`)
}

function Hurse(name, hairColor, eyeColor, weight, height, status) {
        Woman.call(this, name, hairColor, eyeColor, weight, height)
        this.status = status
}

Hurse.prototype = Object.create(Woman.prototype)
Hurse.prototype.constructor = Hurse

Hurse.prototype.skill = function() {
    console.log(`${this.name} is giving injections`)
}

let hurse = new Hurse('Ann','black', 'black', 53,160, 'head nurse')
console.log(hurse)
hurse.speaking()
hurse.physicalActivity()
hurse.skill()

let librarian = new Librarian('Alin','pink', 'blue', 53,160, 'Romeo and Juliet')
console.log(librarian)
librarian.speaking()
librarian.physicalActivity()
librarian.like()

let worker = new Worker('Ivan', 'white', 'blue', 75, 170, 'frontend developer', 'google')
console.log(worker)
worker.speaking()
worker.physicalActivity()
worker.workInfo()
let hunter = new Hunter('Petro','black', 'green', 80, 185, 'duck', 'forest')
console.log(hunter)
hunter.speaking()
hunter.physicalActivity()
hunter.dog()
