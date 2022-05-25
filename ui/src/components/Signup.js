import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
    username: "", // optional
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3306/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        ></input>
        <button className="login-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
