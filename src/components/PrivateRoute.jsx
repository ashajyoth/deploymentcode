import React from "react";
import { Navigate, Route } from "react-router-dom";

import { useAuth } from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
