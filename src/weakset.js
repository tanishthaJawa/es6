let carWeakSet = new WeakSet();
let car = {
    model: 'Honda',
    make: 'Suzuki'
}
carWeakSet.add(car);
console.log(carWeakSet);
let carWeakMap = new WeakMap();
let key1 = {
    id: 1
}
let car1 = {
    model: 'Honda',
    make: 'Suzuki'
}
carWeakMap.set(key1, car1);
console.log(carWeakMap);
