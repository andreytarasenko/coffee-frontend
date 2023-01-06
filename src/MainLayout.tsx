import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import { RoutesE } from './routes/routes';

const MainLayout: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesE.HOME_PAGE} element={<HomePage />} />
      <Route path={RoutesE.STORE_PAGE} element={<StorePage />} />
      <Route
        path="*"
        element={
          <div>
            <h2>404 Page not found</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default MainLayout;
