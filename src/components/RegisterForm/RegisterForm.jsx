import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operation';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <p>Username</p>
        <input type="text" name="name" />
      </Label>
      <Label>
        <p>Email</p>
        <input type="email" name="email" />
      </Label>
      <Label>
        <p>Password</p>
        <input type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
