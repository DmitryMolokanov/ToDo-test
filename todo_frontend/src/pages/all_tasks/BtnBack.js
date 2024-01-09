import React from "react";
import { useNavigate } from "react-router-dom";

const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="btn-back-to-main" onClick={() => navigate("/")}>
        Return to main
      </button>
    </div>
  );
};

export default BtnBack;
