function arithmetic(a, b, operator){
    switch(operator) {
        case "add":
          return a + b;
          break;
        case "subtract":
            return a - b;
          break;
        case "multiply":
            return a * b;
          break;
        case "divide":
            return a / b;
          break;    
      }
}

console.log(arithmetic(1, 2, "add")); // 3
console.log(arithmetic(8, 2, "subtract")); // 6
console.log(arithmetic(5, 2, "multiply")); // 10
console.log(arithmetic(8, 2, "divide")); // 4