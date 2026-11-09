#                                      Type Narrowing in TypeScript

## Introduction:

Type Narrowing is a feature in TypeScript. In a specific code block, it helps to reduce a variables type related errors. When a variable contain multiple types, typescript checks and narrows the type automatically through this feature and improves code safety.

## Description:

Here are the practical examples of Narrowing using typeof, instanceof, and the in operator. These techniques help TypeScript to understand the exact type that are using at execution.

### typeof -
Most common narrowing technique is using typeof operator. In primitive type, this is so much useful.

     Example:

const employee = (data: string | number): void => {
  if (typeof data === "string") {
    console.log("Employee Name:", data.toUpperCase());
  } else {
    console.log("Employee Salary:", data.toFixed(2));
  }
};
employee("John");
employee(3000);

### instanceof -
The instanceof operator is used with classes and objects created from constructors.

     Example:
class Employee {
  salary() {
    console.log("Employee salary: $300");
  }
}
class Manager {
  bonus() {
    console.log("Manager bonus: $100");
  }
}
const showDetails = (person: Employee | Manager): void => {
  if (person instanceof Employee) {
    person.salary();
  } else {
    person.bonus();
  }
};
const employee = new Employee();
const manager = new Manager();
showDetails(employee);
showDetails(manager);

### in-
The in operator checks whether a property exists in an object.

     Example:
class Employee {
  salary() {
    console.log("Employee salary: $300");
  }
}
class Manager {
  bonus() {
    console.log("Manager bonus: $100");
  }
}
const showDetails = (person: Employee | Manager): void => {
  if ("salary" in person) {
    person.salary();
  } else {
    person.bonus();
  }
};
const employee = new Employee();
const manager = new Manager();
showDetails(employee);
showDetails(manager);

## Conclusion:

Type narrowing is an essential feature that is the core thing of TypeScript.By using narrowing techniques, developers can write type-safe error less applications maintaining readability and maintainability.The typeof operator works well with primitive values, instanceof handles class instances and in operator checks object properties. Type Narrowing feature makes Typescript more intelligent and safer.