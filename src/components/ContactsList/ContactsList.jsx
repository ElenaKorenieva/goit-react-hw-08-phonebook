import { useDispatch, useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import {
  StyledContactsList,
  StyledContactsItem,
  StyledDeleteButton,
  StyledIcon,
} from './ContactsList.styled';

import { deleteContacts } from 'redux/Contacts/contactsOperations';
import { selectorContacts, selectorFilter } from 'redux/Contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const filteredContacts = () => {
    if (filter === '') return contacts;
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
        {filteredContactsList.map(contact => (
          <StyledContactsItem key={contact.id}>
            <StyledIcon>
              <FaUserAlt />
            </StyledIcon>
            {contact.name}: {contact.number}
            <StyledDeleteButton
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactsItem>
        ))}
      </StyledContactsList>
    </div>
  );
};
