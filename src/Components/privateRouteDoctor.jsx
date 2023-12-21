/* eslint-disable react/prop-types */

import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteDoctor = ({ element }) => {
  const log = useSelector(state => state.loginReducer);
  const type = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!(log.isLoggedIn && type && type.userType === "doctor")) {
      navigate("/");
    }
  }, [log.isLoggedIn, type, navigate]);

  return <>{log.isLoggedIn && type && type.userType === "doctor" ? element : null}</>;
};

export default PrivateRouteDoctor;
