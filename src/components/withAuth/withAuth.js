import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../pages/login/Login';

const withAuth = (WrappedComponent) => {

  return (props) => {
    const navigate = useNavigate();
    const isLogin = useRecoilValue(loginState);
    
    if (!isLogin) return <Login />;
    return <WrappedComponent {...props} />
  }
}

export default withAuth;