import { mintNFT } from "./scripts/mint-nft"
import './App.css';
import './screens/LoginPage'
import './screens/SignUpPage'
import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUpPage from "./screens/SignUpPage";
import LoginPage from "./screens/LoginPage";
import {collection, getDocs} from "firebase/firestore";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>            
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/home" element={<LoginPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
      </div>
    </Router>
  );
}
