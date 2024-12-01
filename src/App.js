import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import People from "./Pages/People";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import PersonDetail from "./Pages/PersonDetail";

function App() {

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
