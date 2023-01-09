import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { Contact } from '../Contact/Contact';
import { Container, Item } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      {filteredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <Contact name={name} number={number} id={id} />
        </Item>
      ))}
    </Container>
  );
};
