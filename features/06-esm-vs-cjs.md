##### esm 
Uses import & export keywords.
```
// Importing an ES module
import { myFunction } from './module.js';

myFunction();

```
works natively in the browser (without bundlers).

##### CommonJS (CJS)
```
// Importing a CommonJS module
const myFunction = require('./module');

myFunction();

```
Used in Webpack, Create React App (CRA), and node js legacy apps .\

Vite natively `supports ES Modules`, making it much faster than Webpack (which often still relies on CommonJS). Since modern browsers understand ESM, Vite skips unnecessary bundling steps, improving performance.

[⬅ Previous: pre bundling](./05-pre-bundling.md) | [Next: dynamic import  ➡](./07-dynamic-import-and-code-splitting.md)