import { useDispatch } from 'react-redux';

import { Button, Container } from './UserMenu.styled';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  return (
    <Container>
      <p>{user.email}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
