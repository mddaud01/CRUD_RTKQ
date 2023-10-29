import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    navigate("/");

    // Validate email and password fields
    if (formData.email === "" || formData.password === "") {
      setError("Please fill in all fields.");
      return;
    }
    // Dispatch the login action with the email and password
    dispatch(login(formData));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="bg-danger">
        <div className="form-group ">
          <label
            className="p-2 text-white">
            Email:
          </label>
          <input
            className="rounded "
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="p-2 text-white">Password:</label>
          <input
            className="rounded "
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
