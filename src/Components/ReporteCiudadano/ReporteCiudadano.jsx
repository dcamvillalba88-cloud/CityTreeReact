import "./ReporteCiudadano.css";

export default function ReporteCiudadano() {
  return (
    <aside className="reporte-ciudadano glass">
      <h2>reporte ciudadano</h2>
      <input type="text" placeholder="Nombre completo" />
      <input type="email" placeholder="Correo electronico" />
      <input type="text" placeholder="ubicacion: direccion/barrio" />
      <h4>Descripsion del problema</h4>
      <textarea />
      <button> Enviar reporte </button>
    </aside>
  );
}
