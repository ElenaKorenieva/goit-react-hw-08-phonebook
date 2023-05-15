import { Form } from 'components/Form';
import { FilteredItem } from 'components/FilteredItem';
import { ContactsList } from 'components/ContactsList';
import { Container } from 'App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const localStoregeContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(localStoregeContacts);
  //   return parsedContacts && parsedContacts.length
  //     ? parsedContacts
  //     : defaultContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2> Contacts</h2>
      <FilteredItem />
      <ContactsList />
    </Container>
  );
};
