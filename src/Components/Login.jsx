import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "" || password === "") {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (usuario === "admin" && password === "admin123") {
      setError("");
      alert("Inicio de sesión exitoso");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={() => console.log("Button clicked")}>
        Login
      </button>
    </form>
  );
}

export default Login;
