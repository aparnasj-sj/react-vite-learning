##### Customizing the Dev Server
For seamless backend integration, Vite provides built-in proxy capabilities, allowing you to avoid CORS issues during development:
```
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
```
[⬅ Previous: path alias](./02-path-alias.md) | [Next: optimized builds ➡](./04-optimized-builds.md)