//Making a base class
class Instrument {
    constructor(family, verb, loudness) {
        this.family = family;
        this.verb = "play";
        this.loudness = loudness;
    }

    clone() {
        return new (this.constructor);
    }

    //Method
    play() {
        console.log(this.family, this.verb, "at", this.loudness);
    }
};
var myInstrument = new Instrument("family", "verb", "loudness");
myInstrument.play();


//Making concrete  class
class Woodwind extends Instrument {
    constructor(family, verb, loudness) {
        super(family, verb, loudness);
        this.kind = 'woodwind';
    }

}
class Percussion extends Instrument {
    constructor(family, verb, loudness) {
        super(family, verb, loudness);
        this.kind = 'percussion';
    }

}
class String extends Instrument {
    constructor(family, verb, loudness) {
        super(family, verb, loudness);
        this.kind = 'string';
    }

}

var a = new Woodwind();
var b = new Percussion();
var c = new String();
var cloned = a.clone();
var cloned = b.clone();
var cloned = c.clone();

console.log(cloned instanceof Woodwind);
console.log(cloned instanceof Percussion);
console.log(cloned instanceof String);



