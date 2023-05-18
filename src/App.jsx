import Authorization from 'pages/Auth/Authorization';
import UserLogin from 'pages/Auth/UserLogin';
import UserRegister from 'pages/Auth/UserRegister';
import Phonebook from 'pages/Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsAuth } from 'redux/Auth/authSelectors';

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/contacts" element={<Phonebook />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Authorization />}>
            <Route index element={<UserRegister />} />
            <Route path="login" element={<UserLogin />} />
          </Route>
        </Routes>
      )}

      {/* <Routes>
        <Route path='/' element={<Authorization />}>
          <Route index element={<UserRegister />} />
          <Route path='login' element={<UserLogin/>}/>
        </Route>
      </Routes> */}
    </>
  );
};
