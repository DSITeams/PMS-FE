import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

function AppRoutes() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
