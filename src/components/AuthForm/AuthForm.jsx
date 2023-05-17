import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormEl,
  InputEl,
  LabelEl,
  SubmitBtn,
} from 'components/Form/Form.styled';

const AuthForm = ({ onSubmit, submitTitle }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>Name</LabelEl>
      <InputEl
        type="text"
        name="name"
        required
        placeholder="Enter name..."
        value={form.name}
        onChange={handleChange}
      />
      <LabelEl>Email</LabelEl>
      <InputEl
        type="email"
        name="email"
        required
        placeholder="Enter email..."
        value={form.email}
        onChange={handleChange}
      />
      <LabelEl>Password</LabelEl>
      <InputEl
        type="password"
        name="password"
        placeholder="Enter password..."
        value={form.password}
        onChange={handleChange}
      />
      <SubmitBtn type="submit">{submitTitle}</SubmitBtn>
    </FormEl>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  submitTitle: PropTypes.string,
};
