// src/App.js

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 18000);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Home />} exact />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
