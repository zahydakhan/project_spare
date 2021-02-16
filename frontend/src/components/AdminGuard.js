import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectCurrentUser } from '../redux/user/user.selector';

// For routes that can only be accessed by authenticated users
function AdminGuard({ children }) {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  if (!currentUser.is_staff) {
    return <Redirect to="/auth/sign-in" />;
  }

  return children;
}

export default AdminGuard;