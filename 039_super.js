class Animal {
    constructor() {

    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}


class Fish extends Animal {
    constructor(name, age, runSpeed) {
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed){
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed
    }
}

const rabbit = new Rabbit("rabbit", 1, 15);
const fist = new Fish("fish", 2, 10);
const hawk = new Hawk("hawk", 3 ,13)