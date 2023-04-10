function reverse(str){
    if(!str || str.length<2 || typeof str !== 'string')
    return str;

    const rev = [];
    const numOfChar = str.length-1;

    for(let i= numOfChar; i >= 0; i--){
        rev.push(str[i]);
    }

    return rev.join('');

}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

var rStr = reverse('hello world');
console.log(rStr);

rStr = reverse2('hello world');
console.log(rStr);

rStr = reverse3('hello world');
console.log(rStr);
