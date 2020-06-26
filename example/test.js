var obj = { x: 1, y: 2, z: 3 }; // TypeError 
obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  }