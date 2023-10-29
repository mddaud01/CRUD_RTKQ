import React, { useState } from "react";
import "./userList.css";
import { useAddUserMutation, useEditUserMutation } from "../api/api";

function UserModal({ user, closeModal }) {
  const [formData, setFormData] = useState(user);

  const [addUserFn, addUserInfo] = useAddUserMutation();
  const [editUserFn, editUserInfo] = useEditUserMutation();


  const handleSave = (user) => {
    if (user.id) { 
      editUserFn(formData);
    } else {
      addUserFn(formData);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>{user.id ? "Edit User" : "Add User"}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={() => handleSave(formData)} className="btnAction">
          {" "}
          {user.id ? "Save" : "Add"}
        </button>
        <button onClick={closeModal} className="btnClose">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UserModal;
