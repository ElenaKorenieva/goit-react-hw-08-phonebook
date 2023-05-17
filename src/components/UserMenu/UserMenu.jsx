import { Avatar } from '@mui/material';
import {
  LogoContainer,
  LogoutButton,
  UserName,
  WrapperMenu,
} from './UserMenu.styled';
import { deepPurple } from '@mui/material/colors';
import stringAvatar from 'utils/avatarFn';

const UserMenu = () => {
  return (
    <WrapperMenu>
      <LogoContainer>
        <Avatar
          {...stringAvatar('Kent Dodds')}
          sx={{ bgcolor: deepPurple[500] }}
        />
        <UserName>Kent Dodds</UserName>
      </LogoContainer>

      <LogoutButton type="button">Log out</LogoutButton>
    </WrapperMenu>
  );
};

export default UserMenu;
