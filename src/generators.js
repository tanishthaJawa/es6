function* g1() {
    console.log('Hello');
    yield 'Yield 1....';
    console.log('World');
    yield 'yield 2...';
    return 'Returned';
}

var g = g1();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
for (let val of g) {
    console.log(val);
}