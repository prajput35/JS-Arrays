class MArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }

    push(item){
        this.data[this.length] = item;
        ++this.length;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        --this.length;
        return lastItem;
    }

    get(index){
        return this.data[index];
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for (let i = index; i < this.length-1; ++i){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}

const marr = new MArray();
var item;
console.log(marr);
console.log('adding items...');
marr.push(1);
marr.push(2);
marr.push(3);
console.log(marr);
item = marr.get(1);
console.log('get item at index::',1,'::',item);

item = marr.pop();
console.log('popped::',item);

marr.push(3);
marr.push(4);
marr.push(5);
console.log(marr);
item = marr.delete(3);
console.log('deleted item at index:',3,'::',item);
console.log(marr);