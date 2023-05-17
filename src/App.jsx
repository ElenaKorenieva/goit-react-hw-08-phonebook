import Authorization from 'pages/Auth/Authorization';
import UserLogin from 'pages/Auth/UserLogin';
import UserRegister from 'pages/Auth/UserRegister';
// import Phonebook from 'pages/Phonebook/Phonebook';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/goit-react-hw-08-phonebook" element={<Phonebook />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<Authorization />}>
        <Route index element={<UserRegister />} />
        <Route path="login" element={<UserLogin />} />
      </Route>
    </Routes>
  );
};
