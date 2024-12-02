import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpan from "../LoadingSpan/LoadingSpan";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();
     console.log(location.pathname)
     if (loading) {
          return <LoadingSpan></LoadingSpan>
     }
     if (user) {
          return children;
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;


PrivateRoutes.propTypes = {

     children: PropTypes.node
}

