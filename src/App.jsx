import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import Authorization from 'pages/Auth/Authorization';
import UserLogin from 'pages/Auth/UserLogin';
import UserRegister from 'pages/Auth/UserRegister';
import Phonebook from 'pages/Phonebook/Phonebook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshOperation } from 'redux/Auth/authOperations';
import { selectAuthToken, selectIsAuth } from 'redux/Auth/authSelectors';
import { getContacts } from 'redux/Contacts/contactsOperations';

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const isToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isToken) {
      dispatch(refreshOperation()).then(() => dispatch(getContacts()));
    }
  }, [dispatch, isToken]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Authorization />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={UserRegister}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={UserLogin} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />
        <Route
          path="*"
          element={!isAuth ? <Navigate to="/" /> : <Navigate to="/contacts" />}
        />
      </Routes>
    </>
  );
};
