function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.pefixArray = function (arr) {

    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}

let pre = new Prefixer('Hello');
pre.pefixArray(['Brad', 'Jeff']);

// let add =function(a,b){
//     let sum =a+b;
//     console.log(sum);
//     return false;
// }

let add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
}
add(1, 12);