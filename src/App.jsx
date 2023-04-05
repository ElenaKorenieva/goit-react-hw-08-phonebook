import { Form } from 'components/Form';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FilteredItem } from 'components/FilteredItem';
import { ContactsList } from 'components/ContactsList';
import { Container } from 'App.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStoregeContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStoregeContacts);
    return parsedContacts && parsedContacts.length
      ? parsedContacts
      : defaultContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (
      contactsLists.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ id, name, number });
    }

    setContacts(contactsLists);
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.includes(filter);
    });
    return filterContactsList;
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2> Contacts</h2>
      <FilteredItem filter={filter} handleChange={handleChange} />
      <ContactsList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </Container>
  );
};
