class dog{
    constructor(name){
        this._name = name;
    }


    introduce() {
        console.log("this is" + this._name + "!");
    }

    static bark() {
        console.log("Woof!");
    }
}

const myDog = new dog("buster")
myDog.introduce();

dog.bark()