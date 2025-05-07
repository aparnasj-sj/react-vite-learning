import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
{/** lazy loading */}
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ApiCall =React.lazy(()=> import('./pages/api-call/ParentComponent'))

function App() {


    return (

      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
              {/** Routing ApiCall */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<ApiCall />} />
          </Routes>
        </Suspense>
      </Router>
    );
 
}

export default App
