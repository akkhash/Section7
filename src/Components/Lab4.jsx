import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Lab4.css"; // Importing the CSS for styling

function Lab10() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const response = await axios.get(
        "https://67d1b0ca90e0670699bb296a.mockapi.io/9/class"
      );

      // Find matching user
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Show success message based on userType
        if (user.userType === "admin") {
          setSuccess("✅ You logged in as Admin!");
          setTimeout(() => navigate("/admin"), 1500); // Redirect to /admin after 1.5 sec
        } else if (user.userType === "user") {
          setSuccess("✅ You logged in as User!");
          setTimeout(() => navigate("/user"), 1500); // Redirect to /user after 1.5 sec
        }
      } else {
        setError("❌ Invalid username or password!");
      }
    } catch (err) {
      console.error("API error:", err);
      setError("⚠️ Failed to connect to the API. Please try again!");
    }
  };

  return (
    <div className="container">
      <h2>Login - Lab10</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        {/* Display success or error messages */}
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Lab10;
