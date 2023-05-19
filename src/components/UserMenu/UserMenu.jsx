import { Avatar } from '@mui/material';
import {
  LogoContainer,
  LogoutButton,
  UserName,
  WrapperMenu,
} from './UserMenu.styled';
import { deepPurple } from '@mui/material/colors';
import stringAvatar from 'utils/avatarFn';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';
import { logoutOperation } from 'redux/Auth/authOperations';

const UserMenu = () => {
  const userName = useSelector(selectUser) || '';
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logoutOperation());
  };

  return (
    <WrapperMenu>
      <LogoContainer>
        <Avatar {...stringAvatar(userName)} sx={{ bgcolor: deepPurple[500] }} />
        <UserName>{userName}</UserName>
      </LogoContainer>

      <LogoutButton type="button" onClick={() => logoutUser()}>
        Log out
      </LogoutButton>
    </WrapperMenu>
  );
};

export default UserMenu;
