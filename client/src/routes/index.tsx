import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from '../components';
import { useAuth } from '../hooks';
import { Dashboard, Login } from '../screens';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Layout>
  );
}
