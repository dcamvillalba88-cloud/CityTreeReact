import Header from "../../Components/Header/Header";
import DashboardCards from "../../Components/DashBoardCards/DashBoardCards.jsx";
import MapSection from "../../Components/MapSection/MapSection";
import LoginPanel from "../../Components/LoginPanel/LoginPanel";
import ReporteCiudadano from "../../Components/ReporteCiudadano/ReporteCiudadano";
import "./CityTreeDashboard.css";

export default function CityTreeDashboard() {
  return (
    <div className="dashboard">
      <Header />

      <div className="main">
        <div className="left-column">
          <DashboardCards />
          <MapSection />
        </div>

        <div className="right-column">
          <LoginPanel />
          <ReporteCiudadano />
        </div>
      </div>
    </div>
  );
}
