import "../index.css";

import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
