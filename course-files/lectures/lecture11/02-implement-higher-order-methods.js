class SuperArray extends Array {

    map1(callback) {
        // TODO
    }

    filter1(callback) {
        // TODO
    }

    reduce1(callback) {
        // TODO
    }

}

const myArray = new SuperArray(1, 2, 3, 4, 5);
console.log("Actual:", myArray.filter(item => item > 2));
console.log("Expected:", [3, 4, 5]);
