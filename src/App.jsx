import Nav from './Navbar.jsx'
import './App.css'
import Login from './Login.jsx'
import { useNavigate } from "react-router-dom";
import { Switch } from '@material-tailwind/react';
import Signup from './Signup.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLoggedIn from './LoggedIn.jsx';
import 'D:/React-Portfolio/ReactApp/package/dom.js';
import { Hero } from './Hero.jsx';
import { LiveTrain } from '../package/liveTrain/liveTrain.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth/register" element={<Signup />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/" element = {<Hero />}></Route>
          <Route path="/showlive" element = {<LiveTrain />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
