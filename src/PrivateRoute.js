import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ compo }) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>This componanet showing throuh protected Route</h1>
      {compo}
    </div>
  );
}

export default PrivateRoute;
