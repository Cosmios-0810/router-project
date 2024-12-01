import React from "react";
import hata from "../Assets/404.png";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center">
      <img src={hata} alt="error" />
      <div>
        <button className="btn btn-success me-2" onClick={() => navigate("/")}>
          Go Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
