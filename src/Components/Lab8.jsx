import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lab8.css"; // Import CSS file

const API_URL = "https://67d1b0ca90e0670699bb296a.mockapi.io/9/class";

const roleMap = {
  1: "Admin1",
  2: "Admin2",
  3: "User1",
  4: "User2",
};

const Lab8 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "1",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      fetchUsers();
      setFormData({ fullname: "", email: "", password: "", role: "1" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="1">Admin1</option>
          <option value="2">Admin2</option>
          <option value="3">User1</option>
          <option value="4">User2</option>
        </select>
        <button type="submit" className="add-btn">
          Add User
        </button>
      </form>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{roleMap[user.role]}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab8;
