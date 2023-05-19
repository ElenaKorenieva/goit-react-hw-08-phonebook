import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/Auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const optionLoginForm = [
  {
    label: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter name...',
  },
  {
    label: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter password...',
  },
];

const initialLoginState = {
  email: '',
  password: '',
};

const UserLogin = () => {
  const dispatch = useDispatch();

  const handleLoginUser = user => {
    dispatch(loginOperation(user)).then(response => {
      if (response.error) {
        toast.error('Incorrect email or password!');
      }
    });
  };

  return (
    <>
      <h1>Login</h1>
      <AuthForm
        submitTitle="Login"
        onSubmit={handleLoginUser}
        options={optionLoginForm}
        initialState={initialLoginState}
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  );
};

export default UserLogin;
