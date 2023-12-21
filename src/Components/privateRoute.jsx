/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ element }) => {
  const log = useSelector(state => state.loginReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!log.isLoggedIn) {
      navigate("/login");
    }
  }, [log.isLoggedIn, navigate]);

  return <>{log.isLoggedIn ? element : null}</>;
};

export default PrivateRoute;
