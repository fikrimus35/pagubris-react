import React from "react";
import { Redirect, Route } from "react-router-dom";
const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/linimasa" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;