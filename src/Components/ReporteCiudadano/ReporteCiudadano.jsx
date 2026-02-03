import "./ReporteCiudadano.css";

export default function ReporteCiudadano() {
  return (
    <aside className="reporte-ciudadano glass">
      <h2>reporte ciudadano</h2>
      <input type="text" className="input" placeholder="Nombre completo" />
      <input type="email" className="input" placeholder="Correo electronico" />
      <input
        type="text"
        className="input"
        placeholder="ubicacion: direccion/barrio"
      />
      <h4>Descripsion del problema</h4>
      <textarea className="input" placeholder="Especifique el problema aqui" />
      <button> Enviar reporte </button>
    </aside>
  );
}
