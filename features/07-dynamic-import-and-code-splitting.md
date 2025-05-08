##### Dynamic Imports & Code Splitting
To ensure your users experience fast initial load times, leverage ``dynamic imports and React’s `lazy loading` to break large bundles into smaller chunks. For example:
```
import React, { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminDashboard />
    </Suspense>
  );
}
```
```
const ComponentToLoad = lazy(Fn def);
                            |____________> ()=> import('./filename)
```
Vite `automatically splits this into a separate chunk, loaded only when needed`, dramatically improving your app’s performance.

[⬅ Previous: ESM ](./06-esm-vs-cjs.md) | [Next:  basics html and css ➡](./08-basics-fed.md)