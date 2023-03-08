import { Form } from 'components/Form';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FilteredItem } from 'components/FilteredItem';
import { ContactsList } from 'components/ContactsList';
import { Container } from 'App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = ({ name, number }) => {
    console.log(number);
    const id = nanoid();
    const contactLists = [...this.state.contacts];

    if (contactLists.findIndex(contact => name === contact.name) !== -1) {
      alert`${name} is already in the contacts.`;
      return;
    }
    contactLists.push({ name, id, number });
    this.setState({ contacts: contactLists });
  };

  onhandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.onSubmit} />
        <h2> Contacts</h2>
        <FilteredItem filter={filter} onhandleChange={this.onhandleChange} />
        <ContactsList
          contacts={this.onFilteredContacts()}
          onDelete={this.onDelete}
        />
      </Container>
    );
  }
}
