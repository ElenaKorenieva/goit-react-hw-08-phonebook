import { useDispatch, useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import {
  StyledContactsList,
  StyledContactsItem,
  StyledDeleteButton,
  StyledIcon,
} from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const filteredContactsList = filteredContacts();

  return (
    <div>
      <StyledContactsList>
        {filteredContactsList.map((contact, id) => (
          <StyledContactsItem key={id}>
            <StyledIcon>
              <FaUserAlt />
            </StyledIcon>
            {contact.name}: {contact.number}
            <StyledDeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactsItem>
        ))}
      </StyledContactsList>
    </div>
  );
};
