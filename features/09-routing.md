##### Routing to pages
- install  "react-router-dom"
In App.jsx ( or Home page or somthing) \
`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`
```
return (
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
```

> import React, { Suspense } from "react";

Home and About are also react components 

[⬅ Previous: Basics of fed ](./08-basics-fed.md) | [Next:  Deployment ➡](./10-Deployment.md)