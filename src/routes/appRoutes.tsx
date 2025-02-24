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
          element={isAuth ? <Navigate to='/dashboard' /> : <Login />}
        />
        <Route
          path='/dashboard'
          element={isAuth ? <Dashboard /> : <Navigate to='/' />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
