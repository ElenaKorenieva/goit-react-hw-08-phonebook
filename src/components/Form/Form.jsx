import { useState } from 'react';
import propTypes from 'prop-types';
import { FormEl, InputEl, LabelEl, SubmitBtn } from './Form.styled';

export const Form = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangePhone = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    reset();
    handleSubmit({ name, number });
  };

  return (
    <FormEl onSubmit={handleFormSubmit}>
      <LabelEl>Name</LabelEl>
      <InputEl
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeName}
      />
      <LabelEl>Number</LabelEl>
      <InputEl
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone"
        value={number}
        onChange={handleChangePhone}
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormEl>
  );
};

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
