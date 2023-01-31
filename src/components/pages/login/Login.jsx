import React, { useEffect, useState } from "react";
import StarButton from "../../ui/StarButton";
import Title from "../../ui/TItle";
import { useRecoilState } from "recoil";
import { loginState } from "../../../state/loginState";
import { tokenState } from "../../../state/tokenState";

function Login() {
  const [loginData, setLoginData] = useState({});
  const [login, setLogin] = useRecoilState(loginState);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    console.log(login, token);
  }, [loginData]);

  const handleLogin = (e) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoginData(data);
        setLogin(true);
        setToken(data.token);
      })
      .catch((err) => console.error(err));
  };

  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    setLoginData({});
  };
  return (
    <div className="container">
      <Title />
      <StarButton
        title={login ? "Logout" : "Login"}
        link={login ? "/logout" : "/login"}
        color="sbGreen"
        handler={login ? handleLogout: handleLogin}
      />
    </div>
  );
}

export default Login;
