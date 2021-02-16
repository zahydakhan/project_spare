import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectCurrentUser } from '../redux/user/user.selector';

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const auth = useSelector((state) => selectCurrentUser(state));

  if (!auth) {
    return <Redirect to="/auth/sign-in" />;
  }

  return children;
}

export default AuthGuard;
