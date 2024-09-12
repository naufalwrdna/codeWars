function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

console.log(greet('Alice', 'Alice'));
console.log(greet('Alice', 'bob'));