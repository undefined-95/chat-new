import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';

function Router() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Router;
