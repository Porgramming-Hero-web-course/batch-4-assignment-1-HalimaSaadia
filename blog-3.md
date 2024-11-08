# Type Guard in Typescript

## What is Type Guard?

Type Guard Is a technique to get the type of a variable. TypeScript uses built-in JavaScript operators like typeof, instanceof, and in to determine if an object contains a property. Type Gaurd Helps us write safe code when we dealing with unknow type.

## Examples of Type Guards

```javascript
// typeOf operator
const checkInput = (input: string | number) => {
  if (typeof input === "string") {
    console.log(input.length);
  } else {
    console.log(input * input);
  }
};

// in operator
type User = {
  name: string,
  email: string,
};

type Admin = {
  name: string,
  email: string,
  role: string,
};

const checkUser = (user: User | Admin) => {
  if ("role" in user) {
    console.log(`My name is ${user.name}. My role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}. I am a normal User`);
  }
};

checkUser({ name: "Halima", email: "skldfasld" });
```

# Why are Type Guards Necessary?

<b>Code Readability : </b> Type Guard Improve Code Readability. Type Gaurd make it clear which type of variable is expectpected in a certain condition.
<b>Inhance Type Safety : </b> Type Guard Prevent Runtime Error. Type Gaurd catch the type-realesed issue at complile time.
<br>
Type Gaurd is a poweful feature of typescript that handle different type safely and maintain the eficiency of our code.
