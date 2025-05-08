##### Leveraging Vite’s Pre-Bundling (optimizeDeps)
```
export default defineConfig({
  optimizeDeps: {
    include: ['lodash-es', 'moment'], // Pre-bundle specific heavy dependencies
    exclude: ['some-large-unneeded-lib'], // Exclude unnecessary packages
  },
});

```
Careful management of pre-bundling avoids slow-downs due to large external packages.\
When Vite pre-bundles dependencies during development, it means it processes and optimizes third-party libraries (like React, Vue, or lodash) before serving them to the browser. \
In case of CRA, Dependencies are bundled only on app start → slower than Vite’s approach.\

[⬅ Previous: optimize builds](./04-optimized-builds.md) | [Next: ESM support  ➡](./06-esm-vs-cjs.md)
