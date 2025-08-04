import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
// import Council from "./pages/Council";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blog";
import Enroll from "./pages/Enroll";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = ()=>{


  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      {/* <Route path="/council" element={<Council/>}/>     */}
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/enroll" element={<Enroll/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;