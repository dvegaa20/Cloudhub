import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/404Frame.svg";
import "./not-found.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="saas__404-container">
      <div className="saas__404-content">
        <div className="saas_404-layout">
          <img src={notFound} alt="404" className="saas_404-img" />
          <div className="saas_404-info">
            <div className="saas_404-info2">
              <div className="saas_404-upper_info">
                <div className="saas_404-upper_info2">
                  <div className="saas_404-upper_info3">
                    <p className="saas_404-notFound">Page not found</p>
                    <p className="saas_404-notFoundInfo">
                      The page you're looking for isn't available. Try to search
                      again or use the go back button below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleRedirect} className="saas_404-button">
              <button>Go to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
