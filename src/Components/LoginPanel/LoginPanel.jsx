import "./LoginPanel.css";

export default function LoginPanel() {
  return (
    <div className="login-panel glass">
      <h3>Login empleados</h3>
      <input type="text" className="input" placeholder="Usuario" />
      <input type="password" className="input" placeholder="Contraseña" />
      <button>Iniciar sesión</button>
    </div>
  );
}
