import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();  // Get authentication status from context
  const navigate = useNavigate();  // To navigate the user

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to homepage
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;  // Render children if authenticated, otherwise null
}

// PropTypes validation for children prop
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // children must be a valid React node
};

export default ProtectedRoute;
