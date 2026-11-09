# Type Aliases vs Interfaces in TypeScript

## Introduction
TypeScript gives us two ways to describe the shape of data: `type` aliases and `interface`. They look similar, and often work interchangeably, but they differ in important ways. Knowing those differences helps you write cleaner and more maintainable code.

## Core Differences
An interface describes object shapes and can be extended with `extends`. It also supports declaration merging, meaning two interfaces with the same name are combined automatically.

```ts
interface User { id: number }
interface User { name: string } // merged: { id; name }
```

A type alias is more flexible. It can name primitives, unions, tuples, and intersections, which interfaces cannot do directly.

```ts
type Id = string | number;
type Point = [number, number];
type Admin = User & { role: "admin" };
```

Type aliases cannot be merged, and redeclaring one causes an error. Interfaces, on the other hand, cannot represent a union type.

## When to Choose Which
Use `interface` for object shapes, class contracts (`implements`), and public library APIs where consumers may need to extend your types. Use `type` for unions, tuples, mapped or conditional types, and function signatures.

```ts
type Handler = (event: string) => void;
```

## Conclusion
Both tools are powerful, and for plain objects the choice is mostly stylistic. Pick `interface` for extensible object contracts and `type` for everything more complex. Whatever you choose, stay consistent across your codebase.
