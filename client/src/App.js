import './App.css';
import AllAuthors from './views/AllAuthors'
import React, {useState, useEffect} from "react";
import {Router} from "@reach/router"
import axios from 'axios';

function App() {

  const [authors, setAuthors] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
      .then(res=>{
        setAuthors(res.data.authors);
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <AllAuthors path="/" authors={authors} />
      </Router>
    </div>
  );
}

export default App;
