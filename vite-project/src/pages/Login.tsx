import { useState, type FormEvent } from "react";
import { getMyDetails, login } from "../service/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../assets/css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await login(email, password);

      if (!res.data.accessToken) {
        alert("Login failed");
        return;
      }

      await localStorage.setItem("accessToken", res.data.accessToken);

      const detail = await getMyDetails();
      setUser(detail.data);

      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
