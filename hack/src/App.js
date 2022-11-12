import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from "react";
import Home from "./components/home";


function App() {

    const [islogin, setIslogin] = useState(false);


useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        setIslogin(true);
        console.log("login")

      } else {
        // User is signed out
        setIslogin(false);
        // console.log("error")
      }
      });
},[])


  return (
    <div>
      <div>
        <div>
          <h3>Student Attendace Portal</h3>
        </div> 
      </div>
      <div>
        {
          (islogin) ? <Home /> : <Login/>
        }

   
      </div>
    </div>
  );
}

export default App;
