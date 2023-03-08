import propTypes from 'prop-types';
import {
  StyledContactsList,
  StyledContactsItem,
  StyledDeleteButton,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <div>
    <StyledContactsList>
      {contacts.map((contact, id) => (
        <StyledContactsItem key={id}>
          {contact.name}: {contact.number}
          <StyledDeleteButton
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </StyledDeleteButton>
        </StyledContactsItem>
      ))}
    </StyledContactsList>
  </div>
);

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func.isRequired,
};
