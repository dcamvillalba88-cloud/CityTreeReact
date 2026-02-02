import "./LoginPanel.css";

export default function LoginPanel() {
  return (
    <div className="login-panel glass">
      <h3>Login empleados</h3>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button>Iniciar sesión</button>
    </div>
  );
}
