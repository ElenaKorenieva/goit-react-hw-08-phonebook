import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormEl, InputEl, SubmitBtn } from 'components/Form/Form.styled';

const AuthForm = ({ onSubmit, submitTitle, options, initialState }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      {options.map(option => (
        <label key={option.name}>
          <h2>{option.label}</h2>
          <InputEl
            type={option.type}
            name={option.name}
            required
            placeholder={option.placeholder}
            value={form[option.name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <SubmitBtn type="submit">{submitTitle}</SubmitBtn>
    </FormEl>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  submitTitle: PropTypes.string,
  options: PropTypes.array,
  initialState: PropTypes.object,
};
