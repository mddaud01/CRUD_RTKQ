import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import PrivateRoute from "./PrivateRoute";
import { Suspense, lazy } from "react";
const LazyUserList = lazy(() => import("./components/UserList"));
const LazyAbout = lazy(() => import("./About/About"));
const LazyContect = lazy(() => import("./Contect/Contect"));
const LazyLogin = lazy(() => import("./Signup&Login/Login"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyUserList />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/contect" element ={<PrivateRoute compo ={<LazyContect/>}/>}/>
          <Route path="/about" element ={<PrivateRoute compo ={<LazyAbout/>}/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
export default App;
