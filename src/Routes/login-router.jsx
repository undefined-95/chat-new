import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/authentication';

function LoginRouter() {
  return (
    <Routes>
      <Route path="/authentication" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/authentication" />} />
    </Routes>
  );
}

export default LoginRouter;
