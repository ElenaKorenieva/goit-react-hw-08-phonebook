import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerOperation } from 'redux/Auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const optionRegisterForm = [
  {
    label: 'name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter name...',
  },
  {
    label: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter email...',
  },
  {
    label: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter password...',
  },
];

const inintiealRegistrationState = {
  name: '',
  email: '',
  password: '',
};

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterUser = newUser => {
    dispatch(registerOperation(newUser)).then(response => {
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
      <h1>RegisterPage</h1>
      <AuthForm
        onSubmit={handleRegisterUser}
        submitTitle="Register"
        options={optionRegisterForm}
        initialState={inintiealRegistrationState}
      />
      <ToastContainer autoClose={3500} theme="colored" />
    </>
  );
};

export default UserRegister;
