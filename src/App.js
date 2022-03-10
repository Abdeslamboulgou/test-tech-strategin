import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Routes>
        <Route path="/users" exact component={Users} />

      </Router>
    </div>
  );
}

export default App;
