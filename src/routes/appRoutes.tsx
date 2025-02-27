import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Layout from '../pages/layout';
import Reservation from '../pages/reservation';

function AppRoutes() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout title="Dashboard"/>}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/' element={<Layout title="Reservation" />}>
          <Route path='/reservation' element={<Reservation/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
