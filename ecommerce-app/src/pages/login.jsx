
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("role", "admin");
      navigate("/dashboard");
      return;
    }

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass && storedUser !== null) {
      localStorage.setItem("role", "user");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/79/79/beautiful-woman-shopping-composed-in-a-circle-vector-6157979.jpg"
          alt="Logo"
        />

        <h2>WELCOME USER</h2>

        <form onSubmit={handleLogin}>

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

          <button type="submit">Login</button>

        </form>

        <div className="register-link">
          If not have an account{" "}
          <Link to="/signup">Register here</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
