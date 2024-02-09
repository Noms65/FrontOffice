import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRouter = ({ element, authenticated, ...props }) => {
  return authenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRouter;
