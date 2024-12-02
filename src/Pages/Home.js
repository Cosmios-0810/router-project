import React from "react";
import About from "../Components/About";
import Courses from "../Components/Courses";
import { useSelector } from "react-redux";

const Home = () => {
  
  const { user } = useSelector((state) => state.auth)

  return (
    <>

      {/* Conditional Rendering: Kosullu yazdirma */}

      { user && (
        <div>
          <p className="text-center mt-5 fs-1">Welcome
            <span className="fw-bold ms-2">{user.name}</span>
          </p>
          <p className="text-center text-danger fs-3">{user.email}</p>
        </div>
      )
        
      }


      <About />
      <Courses />
    </>
  );
};

export default Home;
