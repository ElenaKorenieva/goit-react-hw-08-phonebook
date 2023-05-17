import { useDispatch, useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import {
  StyledContactsList,
  StyledContactsItem,
  StyledDeleteButton,
  StyledIcon,
} from './ContactsList.styled';

import { selectorContacts, selectorFilter } from 'redux/Contacts/selectors';
import { useEffect } from 'react';
import { deleteContacts, getContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const filteredContacts = () => {
    if (filter === '') return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.includes(filter)
    );
  };

  const filteredContactsList = filteredContacts();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <StyledContactsList>
        {filteredContactsList.map((contact, id) => (
          <StyledContactsItem key={id}>
            <StyledIcon>
              <FaUserAlt />
            </StyledIcon>
            {contact.name}: {contact.phone}
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
