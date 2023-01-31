import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const withAuth = (WrappedComponent) => {

  return (props) => {
    const navigate = useNavigate();
    const isLogin = useRecoilValue(loginState);
    
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      console.log('로그인이 필요합니다.');
      useEffect(() => {
        navigate('/login');
      }, []);
      return null;
    }

    return <WrappedComponent {...props} />
  }
}

export default withAuth;