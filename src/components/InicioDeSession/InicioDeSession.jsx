import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:8080/api/session/login", data);

      console.log("ESTO ES RESPONSE", response.data);
      alert(response.data.message);

      if (response.data.statusCode === 200) {
        window.location.replace("/");
        // localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Usuario" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
        <button type="button" id="newSessionConGoogle">Iniciar sesión con Google</button>
        <button type="button" id="github">Iniciar sesión con GitHub</button>
      </form>
    </div>
  );
}

export default Login;
