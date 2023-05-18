import { useDispatch, useSelector } from 'react-redux';
import { FormEl, InputEl, LabelEl, SubmitBtn } from './Form.styled';
import { addContacts } from 'redux/Contacts/contactsOperations';
import { selectorContacts } from 'redux/Contacts/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const item = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts({ name, number }));
    }
    e.target.reset();
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
      />
      <LabelEl>Number</LabelEl>
      <InputEl
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone"
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormEl>
  );
};
