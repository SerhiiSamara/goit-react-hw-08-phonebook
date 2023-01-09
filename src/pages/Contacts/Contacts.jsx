import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Title } from './Contacts.styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 && (
        <>
          <ContactsList />
        </>
      )}
      {isLoading && !error && <h4>Request in progress...</h4>}
      {error && <h2>ERROR...</h2>}
      {contacts.length <= 0 && !error && !isLoading && (
        <h4>Sorry. Your phonebok is empty.</h4>
      )}
    </div>
  );
}
