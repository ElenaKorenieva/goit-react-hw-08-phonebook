import React from 'react';
import { Container } from 'App.styled';
import { ContactsList } from 'components/ContactsList';
import { FilteredItem } from 'components/FilteredItem';
import { Form } from 'components/Form';
import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';

const Phonebook = () => {
  return (
    <Container>
      <UserMenu />
      <Loader>
        <h1>Phonebook</h1>
        <Form />
        <h2> Contacts</h2>
        <FilteredItem />
        <ContactsList />
      </Loader>
    </Container>
  );
};

export default Phonebook;
