import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "admin@admin.com", // required
    password: "Admin@123", // required
    error: "",
  });

  const authContext = useAuth();
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3306/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log("success", data);
        // isLoggedIn(true);
        authContext.login(data.user);
      }).then((response) => {
        navigate('/dashboard');
        // window.location.href = "/dashboard";
      })
      .catch(async (error) => {
        setFormData({
          error: await error.json(),
        });
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      <h1>Login Form</h1>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="login-btn" type="submit">
          Login
        </button>
        

        <p> {formData.error}</p>
      </form>
      
    </React.Fragment>
  );
}
