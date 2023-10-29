import React, { useState } from "react";
import "./userList.css";
import { useUsersQuery, useDeleteUserMutation } from "../api/api";
import { useSelector } from "react-redux";
import UserModal from "./UserModal";
import { Link, useNavigate } from "react-router-dom";

function UserList() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [user, setUser] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const { data: users, isLoading, isError } = useUsersQuery();
  const [deleteFn, deleteInfo] = useDeleteUserMutation();
  const navigate = useNavigate();
  if (isLoading) {
    return <div className=" ">Loading...</div>;
  }
  if (isError) {
    return <div className=".text-danger">Error loading users.</div>;
  }
  const handleEdit = (data) => {
    setUser(data);
    setModalOpen(true);
  };
  const handleDelete = (id) => {
    deleteFn(id);
  };
  const handleAddUser = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="m-5">
        <div className="userList d-flex flex-column  ">
          <h2>User List</h2>
         {isAuthenticated ? <button className="btnAdd" onClick={handleAddUser}>
            Add User
          </button>:<h1 className="text-warning">You are not Autherized user </h1>}
          <table>
            <thead>
              <tr>
                <td>S No</td>
                <td> ID </td>
                <td> NAME </td>
                <td> EMAIL </td>
                <td>ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user,i) => {
                  return (
                    <tr key={user.id}>
                      <td>{i}</td>
                      <td> {user.id} </td>
                      <td> {user.firstName}</td>
                      <td> {user.email} </td>
                      <td>
                        <span className="btn">
                          <Link className="nav-link">
                          { isAuthenticated ?  (<button
                              className="editBtn"
                              onClick={() => handleEdit(user)}
                            >
                              Edit
                            </button>):'read only'}
                          </Link>
                        </span>
                        <span className="btn">
                         {isAuthenticated ?  ( <button
                            className="deleteBtn btnClose"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>): ''}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <UserModal user={user} closeModal={() => setModalOpen(false)} />
        )}
      </div>
    </>
  );
}

export default UserList;
