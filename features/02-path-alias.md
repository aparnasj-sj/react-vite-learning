
##### Path Aliases for Cleaner Imports
```
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
});
```

---
[⬅ Previous: config file](./01-config-file-and-swc.md) | [Next: customize dev server ➡](./03-customize-dev-server.md)
