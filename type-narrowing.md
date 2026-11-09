# Type Narrowing in TypeScript

## Introduction
Type narrowing is how TypeScript refines a broad type, such as a union, into a more specific one inside a code block. It lets you safely use properties and methods that only exist on certain types, without unsafe casts.

## Narrowing with typeof
The `typeof` operator checks primitive types.

```ts
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // value is string
  }
  return value.toFixed(2); // value is number
}
```

## Narrowing with instanceof
Use `instanceof` to distinguish class instances at runtime.

```ts
function handle(err: Error | string) {
  if (err instanceof Error) {
    return err.message; // err is Error
  }
  return err; // err is string
}
```

## Narrowing with the in Operator
The `in` operator checks whether a property exists on an object, which is ideal for unions of object types.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark(); // pet is Dog
  } else {
    pet.meow(); // pet is Cat
  }
}
```

## Conclusion
Type narrowing keeps your code both flexible and type-safe. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes. Together, they let the compiler understand your logic and catch mistakes before runtime.
