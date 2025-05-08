##### Optimized Builds with Rollup Options
```
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
```
creates a dedicated vendor.js chunk containing React libraries, improving cache efficiency and initial load performance.
When Vite bundles your production build using Rollup, it often creates a separate vendor.js file \
This file contains third-party dependencies, such as React and other libraries, and remains mostly unchanged across builds.\

- Because vendor files rarely change, browsers cache them aggressively.
- On future visits, users get a cache hit, meaning the browser doesn’t need to redownload these libraries—only new code changes.

[⬅ Previous: customise dev server](./03-customize-dev-server.md) | [Next: pre bundling ➡](./05-pre-bundling.md)