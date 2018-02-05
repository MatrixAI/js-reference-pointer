# Reference Pointer

This library simply wraps a primitive value (number, string) into an object, so instead of passing a value around, you pass the object around. This allows you do pass-by-reference. This is basically JavaScript's equivalent of a pointer.

Basic Usage
-------------

```sh
npm install --save 'reference-pointer';
```

```js
import Reference from 'reference-pointer';

const changed = new Reference(false);

function changeBool (changed) {
  changed.set(true);
}

changeBool(changed);

console.log(changed.get()); // true
```

Development
------------

To build this package for release:

```
npm run build
```

It will run tests, generate documentation and output multiple targets. One for browsers and one for nodejs. See `rollup.config.js` to see the target specification.

If your bundler is aware of the module field in `package.json`, you'll get the ES6 module directly.

Once you've updated the package run this:

```
npm version <update_type>
npm publish
```
