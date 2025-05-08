- tag is used to include JavaScript files inside your HTML page:
- `link` tag is Used to connect CSS files to your HTML page for styling \
`  <script src="script.js"></script>` 
```
<head>
    <title>CSS Example</title>
    <!-- Linking an external stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>
```

#### How CSS Modules Work

When you import a CSS Module file (styles.module.css), the classes inside are treated as unique, locally scoped properties. You don't need to worry about `class name conflicts` across components.
```css
.button {
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
```
```javascript 
import React from "react";
import styles from "./styles.module.css"; // Import CSS module

function Button() {
    return <button className={styles.button}>Click Me</button>;
}

export default Button;
```
When styles.module.css is imported, React (via Webpack or Vite) transforms class names into unique identifiers like:
`.button → styles_button__abc123`. This prevents conflicts with other styles in the app.

[⬅ Previous: dynamic import ](./07-dynamic-import-and-code-splitting.md) | [Next:  Routing ➡](./09-routing.md)