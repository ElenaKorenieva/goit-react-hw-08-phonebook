import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/Auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleLoginUser = user => {
    dispatch(loginOperation(user)).then(response => {
      if (response.error) {
        toast.error('Please enter valid data!');
        navigate('/');
      } else {
        navigate('/contacts');
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
      <ToastContainer autoClose={3500} theme="colored" />
    </>
  );
};

export default UserLogin;
