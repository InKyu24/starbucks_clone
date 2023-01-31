import React, { useEffect, useState } from 'react';
import StarButton from '../../ui/StarButton';
import Title from '../../ui/TItle';
import { useRecoilState } from 'recoil';
import { loginState } from '../../../state/loginState';
import { tokenState } from '../../../state/tokenState';

function Login() {

  const [loginData, setLoginData] = useState({});
  const [login, setLogin] = useRecoilState(loginState);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    console.log(login, token)
  }, [loginData]);

  const handleLogin = (e) => {  
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoginData(data);
        setLogin(true)
        setToken(data.token)
      })
      .catch(err => console.error(err));
  }

  const logout = () => {
    localStorage.clear(); setLogin(false); setLoginData({});
  }
  return ( 
    <>
      <Title />
      {login ?
        <button onClick={logout}>로그아웃</button>:
        <StarButton
          title="Login"
          link="/login"
          color="sbGreen"
          handler={handleLogin}
        />
      }
    </>

   );
}

export default Login;