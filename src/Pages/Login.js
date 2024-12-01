import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const formStyle = {
    margin: "auto",
    maxWidth: "500px",
    marginTop: "3rem"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(password)

    navigate("/")

    setName("")
    setEmail("")
    setPassword("")

  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h1 className="text-center mb-3">Login</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          } }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
