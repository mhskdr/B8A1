#                                       Core differences between type aliases and interface in Typescript

## Introduction:

Typescript has two powerful method to declare custom types. They are: (i) type aliases and (ii) interface. These two method helped developers a lot to make the data well-structured. Though this two method are similar but there are important differences. Understanding these differences will help a developer a lot for thier projects.  

## Description:

(i). type alias:   A type alias allows developers to create a new name for a type. Using type alias can declare primitive type, union, tuple, intersection and also object. types can extend type with intersection(&).

        Example: 

**Primitive Type:**

```typescript
type Username = string;

let name: Username = "John";
```

**Union Type:**

```typescript
type Status = "success" | "error" | "loading";

let result: Status = "success";
```

**Tuple Type:**

```typescript
type UserInfo = [string, number, boolean];

const user: UserInfo = ["John", 25, true];
```

**Intersection Type:**

```typescript
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
```

**Object Type:**

```typescript
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 25
};
```

(ii). interface:    An interface is mainly an objects structure. It's key power is **Merging** same name variable's automatically. Interfaces use `extends` word to extend the type. 

        Example:

**Merging:**

```typescript
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
```

**Interface Extension:**

```typescript
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
const employee: Employee = {
  name: "John",
  salary: 50000
};
```

## Conclusion: 

Both type and interface are important in typescript.In object oriented structures, developers use interface for its merging power to extend the type. But if there are tuple,union,intersection,primitive things, developer use type. They both are using in different scenario and requirement. 
