import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoutes from "./Components/HomeRoutes";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
// import ForgotPassword from "./Pages/ForgotPassword";
import TableData from "./Components/TableData";
import Modal from "./Components/Modal";
import Crud from "./Pages/Crud";
import Cms from "./Pages/Cms";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeRoutes />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element ={<Dashboard/>}> </Route>
          {/* <Route exact path="/forgotpassword" element ={<ForgotPassword/>}> </Route> */}
          {/* <Route exact path="/tabledata" element={<TableData/>}></Route> */}
          {/* <Route exact path="/modal" element={<Modal/>}></Route> */}
          <Route exact path="/crud" element={<Crud/>}></Route>
          <Route exact path="/cms" element={<Cms/>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
