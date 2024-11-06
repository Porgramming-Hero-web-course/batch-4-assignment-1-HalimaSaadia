{
  const getProperty = <O, P extends keyof O>(obj: O, prop: P) => obj[prop];
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
