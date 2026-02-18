import { useState } from "react";
import api from "../utils/api";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api.post("/auth/login", { email, password });
    setToken(res.data.token);
  };
return (
  <div className="login-box">
    <h2>Employee Payroll</h2>

    <input
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={login}>Login</button>
  </div>
);
}