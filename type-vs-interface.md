#                                       Core differences between type aliases and interface in Typescript

## Introduction:

Typescript has two powerful method to declare custom types. They are: (i) type aliases and (ii) interface. These two method helped developers a lot to make the data well-structured. Though this two method are similar but there are important differences. Understanding these differences will help a developer a lot for thier projects.  

## Description:

(i). type alias:   A type alias can declare primitive type, union, tuple, intersection and also object. types can extend type with intersection(&).

        Example: 

primitive type:
type Username = string;
let name: Username = "John";

union type:
type Status = "success" | "error" | "loading";
let result: Status = "success";

tuple type:
type UserInfo = [string, number, boolean];
const user: UserInfo = ["John", 25, true];

intersection type:

type Person = {
  name: string;
};
type Employee = {
  salary: number;
};
type Staff = Person & Employee;
const staff: Staff = {
  name: "John",
  salary: 50000
};

object type:
type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "John",
  age: 25
};

(i). interface:    An interface is mainly an object. It's key power is merging same name variable's automatically. Interfaces use extends word to extend the type. 

        Example:

interface User {
  name: string;
}
interface User {
  age: number;
}

const user: User = {
  name: "John",
  age: 25
};

## Conclusion: 

Both type and interface are important in typescript.In object oriented structures, developers use interface for its merging power to extend the type. But if there are tuple,union,intersection,primitive things, developer use type. They both are using in different scenario and requirement. 
