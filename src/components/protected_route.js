import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../core/user";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticatedx = isAuthenticated();
  console.log("this", isAuthenticatedx);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
      isAuthenticatedx ? <Component {...props} /> : <Redirect to="/registration" />
      }
    />
  );
}

export default ProtectedRoute;