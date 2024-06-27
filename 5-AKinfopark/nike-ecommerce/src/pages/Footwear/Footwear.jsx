import { blackLogo, favoriteImage, cartImage } from "../../utilities/variables";
import { Outlet } from "react-router-dom";

import "./Footwear.css";

export const Footwear = () => {
  return (
    <section className="footwear-section">
      <div className="footwear-header">
        <div className="footwear-header-left"></div>
        <div className="footwear-header-middle">
          <img className="footwear-logo" src={blackLogo} alt="logo" />
        </div>
        <div className="footwear-header-right">
          <div className="footwear-icons">
            <img className="footwear-icon" src={favoriteImage} alt="favorite" />
            <img className="footwear-icon" src={cartImage} alt="cart" />
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
