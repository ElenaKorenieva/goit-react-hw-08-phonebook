import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormEl, InputEl, LabelEl, SubmitBtn } from './Form.styled';
import { addContacts } from 'redux/operations';
import { selectorContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const reset = () => {
    setForm({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    reset();
    const newContact = { ...form };
    contacts.some(contact => contact.name === form.name)
      ? alert('The contact is already in the contact list')
      : dispatch(addContacts(newContact));
  };

  const { name, number } = form;

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
        onChange={handleChange}
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
        onChange={handleChange}
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormEl>
  );
};
