import React, {useState}  from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Members from "./components/members/Members";
import Releases from "./components/releases/Releases";
import Getintouch from "./components/getintouch/Getintouch";
import Footer from "./components/footer/Footer";

function App() {

  const [isopen, setisopen] = useState(false);
    const toggle = () => {
      setisopen(!isopen);
    };

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Members/>
      <Releases/>
      <Getintouch/>
      <Footer/>
    </>
    
  );
}

export default App;
