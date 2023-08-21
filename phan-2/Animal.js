class Animal {

    set eyeColor(color){
        this._eyeColor = color;
    }

    get eyeColor(){
        return this._eyeColor;
    }

    get hairColor() {
        return this._hairColor;
    }

    set hairColor(color) {
        this._hairColor = color;
    }
}

let duck = new Animal();
duck.eyeColor = "yellow"
console.log(duck.eyeColor);
console.log(duck);