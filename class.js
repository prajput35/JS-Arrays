class Player{
    constructor(name, type){
        console.log('Player::', this)
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log('Hi, i am ', this.name, ' and, I am a ', this.type);
    }
}

class Wizard extends Player{
    constructor(name, type){
        //console.log(this);
        super(name, type);
        console.log('Wizard::',this);
    }
    play(){
        console.log('I am a ',this.type);
    }
}

const wiz = new Wizard('Paras', 'Coder');
wiz.introduce();
wiz.play();