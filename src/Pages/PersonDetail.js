import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState();
  const [error, setError] = useState();

  // const { state: person } = useLocation();
  // console.log(person);

  const { id } = useParams();

  console.log(id);

  const getPerson = async () => {
    try {

      const response = await axios.get(`https://reqres.in/api/users/${id}`)
      console.log(response)
      console.log(response.data.data)

      setPerson(response.data.data)



    } catch (error) {
      console.log(error);
      setError(error)
    }
  };


  useEffect(() => {
      getPerson()
  }, [])



  if (error) {
    return <NotFound />
  }
  


  return (
    <div className="container text-center">
      <h1>
        {person?.first_name} {person?.last_name}
      </h1>
      <img src={person?.avatar} alt="profile" />
      <p>{person?.email}</p>
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

export default PersonDetail;
