"use strict";

// Level 1 //

function print(start, end) {
  if (start <= end) {
    console.log("Task-1:", start);
    print(start + 1, end);
  } else {
    return;
  }
}
print(2, 12);

// ------------------------------task-2------------------------------- //

function factorial(num) {
  if (num !== 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}
console.log("factorial():", factorial(5));

// ------------------------------task-3------------------------------- //

function createMultipleBy(num) {
  return function (num1) {
    return num * num1;
  };
}

const multipleBy5 = createMultipleBy(5);
const multipleBy2 = createMultipleBy(2);

console.log("multipleBy5:", multipleBy5(4));
console.log("multipleBy5:", multipleBy5(6));

console.log("multipleBy2:", multipleBy2(4));
console.log("multipleBy2:", multipleBy2(6));

// Level 2 //

const sales = {
  name: "Jorge Clunie",
  profit: 10000,
  clients: [
    {
      name: "Harrison ford",
      profit: 5000,
      clients: [
        {
          name: "Mila Kunis",
          profit: 1000,
          clients: [
            {
              name: "Julia Roberts",
              profit: 2000,
              clients: [{ name: "Richard Gir", profit: 3000, clients: [] }],
            },
          ],
        },
      ],
    },
    {
      name: "Barak Obama",
      profit: 7000,
      clients: [{ name: "Hilari Klinton", profit: 5000, clients: [] }],
    },
    {
      name: "Frodo",
      profit: 3000,
      clients: [
        { name: "Bilbo", profit: 2000, clients: [] },
        {
          name: "Legolas",
          profit: 3000,
          clients: [{ name: "Galadriel", profit: 1000, clients: [] }],
        },
      ],
    },
  ],
};

const amountOfSalaries = (obj) => {
  if (typeof obj === "object" && obj !== null) {
    let sum = obj.profit;
    if (obj.clients) {
      obj.clients.forEach((element) => {
        sum += amountOfSalaries(element);
      });
    }
    return sum;
  }
};
const profits = amountOfSalaries(sales);
console.log(profits);

// Level 3 //

const memoization = (fn) => {
  const cache = {};
  return (value) => {
    if (value in cache) {
      return cache[value];
    } else {
      return (cache[value] = fn(value));
    }
  };
};

const expensiveOperation = (n) => {
  return n * 2;
};

const memoizedExpensiveOperation = memoization(expensiveOperation);
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(5));

console.log(memoizedExpensiveOperation(10));
console.log(memoizedExpensiveOperation(10));
