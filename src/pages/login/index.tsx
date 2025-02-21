import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../viewModels/UseAuth';
import CheckBox from '../../components/Checkbox';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const { authState, handleLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isAuth) {
      navigate('/dashboard');
    }
  }, [authState.isAuth, navigate]);

  return (
    <div className='bg-color h-full w-full flex items-center justify-center'>
      <div className='flex w-full h-full'>
        <div className='w-3/5 flex items-center justify-center'>
          <img
            src='src/assets/images/WP-DSI.png'
            className='w-xl h-lg object-cover'
            alt=''
          />
        </div>
        <div className='w-2/5'>
          <div className='h-screen flex flex-col items-center justify-center'>
            <img
              src='src/assets/images/logo-title.png'
              alt='logo'
              className='w-40 h-45 mb-4'
            />
            <p className='font-extralight mb-4 '>Login in to DEMO HOTEL</p>
            <form
              className='w-3/4 flex flex-col justify-center mt-8'
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(credentials.username, credentials.password);
              }}
            >
              <FormInput
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                className='border border-gray-400 rounded-lg p-2'
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                required
              />
              <FormInput
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='border border-gray-400 rounded-lg p-2'
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
              <CheckBox
                checked={isChecked}
                title='Remember me'
                onChange={(value) => {
                  setIsChecked(value);
                  console.log('remember me:', value);
                }}
              />
              <Button type='submit'>Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
