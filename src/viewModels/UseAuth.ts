import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { login, logout } from '../stores/slice/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const handleLogin = (username: string, password: string) => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return { authState, handleLogin, handleLogout };
};

export default useAuth;
