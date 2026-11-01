
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("role", "user");

      navigate("/dashboard");
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-box">

        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/79/79/beautiful-woman-shopping-composed-in-a-circle-vector-6157979.jpg"
          alt="Logo"
        />

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <br />

          <button type="submit">Register</button>

        </form>

        <div className="register-link">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;
