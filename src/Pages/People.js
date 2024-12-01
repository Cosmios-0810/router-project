import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";



const People = () => {
  
  const navigate = useNavigate()


  const [people, setPeople] = useState([]);

  // let people = []

  const getPeople = () => {
    fetch("https://reqres.in/api/users") // veriye istek atildi
      .then((response) => response.json()) // bekleme asamasi , veri jsona cevrilir
      .then((veri) => {
        console.log(veri.data);
        // people = veri.data;
        setPeople(veri.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // react hooks

  useEffect(() => {
    console.log("uygulama baslatildi");
    getPeople();
  }, []);

  // dependency Array

  return (
    <div className="container text-center mt-4">
      <h1>People List</h1>
      <div className="row justify-content-center">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={id}

              //! absolute path 
              // onClick={() => {
              //   navigate(`/people/${id}`)
              // }}

              //! relative path 
              // onClick={() => {
              //   navigate(`${id}`, {state: person})
              // }}

              onClick={() => {
                navigate(`${id}`)
              }}
            >
              <img src={avatar} alt="profile-foto" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
