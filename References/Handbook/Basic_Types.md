## Basic Types
***

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

***
### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

```typescript
    let isDone:boolean = false;
``` 

***
### Number
As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```typescript
    let deicimal : number = 6;
    let hex : number = 0xa00d;
    let binary : number = 0b1010101010
    let octal : number = 0o74444;
    let big : bigint = 100n;
```

***

### String
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes

```typescript
    let color : string = "red"; 
    color = "blue"; 
```

***
### Array
TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

```typescript
    let numberList : number[] = [1,2,3 ,null]
    
    let numberOrStringList : number[] | string[] = [1,2,3, "a"];

    let ArrayList : Array<number> = [1,2,3]; 
```

***
### Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

```typescript
    let x: [string, number];
    
    x = ["hello", 10]; // OK
```

***
### Enum
A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```typescript
    enum Color{
        Red,
        Green,
        Blue
    }

    let c : Color = Color.Blue; 

    let ColorName : string = Color[Color.Blue];         
```

***
### Unknown
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.

```typescript
    let notSure: unknown = 4;
    notSure = "maybe a string instead";
    
    // OK, definitely a boolean
    notSure = false;
```

```typescript
    declare const maybe: unknown;
    // 'maybe' could be a string, object, boolean, undefined, or other types
    const aNumber: number = maybe;
    Type 'unknown' is not assignable to type 'number'.
    
    if (maybe === true) {
      // TypeScript knows that maybe is a boolean now
      const aBoolean: boolean = maybe;
      // So, it cannot be a string
      const aString: string = maybe;
    Type 'boolean' is not assignable to type 'string'.
    }
    
    if (typeof maybe === "string") {
      // TypeScript knows that maybe is a string
      const aString: string = maybe;
      // So, it cannot be a boolean
      const aBoolean: boolean = maybe;
    Type 'string' is not assignable to type 'boolean'.
    }
```

***

### Any

In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type:

```typescript
    let looselyTyped: any = 4;
    // OK, ifItExists might exist at runtime
    looselyTyped.ifItExists();
    // OK, toFixed exists (but the compiler doesn't check)
    looselyTyped.toFixed();
    
    let strictlyTyped: unknown = 4;
    strictlyTyped.toFixed();
    Object is of type 'unknown'.
```

***

### Void
void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

```typescript
    function warnUser(): void {
      console.log("This is my warning message");
    }
```

***
### Object
object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

With object type, APIs like Object.create can be better represented. For example:

```typescript
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

create(42);
//Argument of type '42' is not assignable to parameter of type 'object | null'.

create("string");
//Argument of type '"string"' is not assignable to parameter of type 'object | null'.

create(false);
// Argument of type 'false' is not assignable to parameter of type 'object | null'.

create(undefined);
// Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
Try

```