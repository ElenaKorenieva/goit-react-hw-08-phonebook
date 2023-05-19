import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import Authorization from 'pages/Auth/Authorization';
import UserLogin from 'pages/Auth/UserLogin';
import UserRegister from 'pages/Auth/UserRegister';
import Phonebook from 'pages/Phonebook/Phonebook';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
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
      </Routes>
    </>
  );
};
