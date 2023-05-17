import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
// import { useDispatch } from 'react-redux';

const UserLogin = () => {
  //   const dispatch = useDispatch();

  const handleLoginUser = data => {
    //  dispatch(loginUser(data));
  };

  return (
    <>
      <h1>Login</h1>
      <AuthForm submitTitle="Login" onSubmit={handleLoginUser} />
    </>
  );
};

export default UserLogin;
