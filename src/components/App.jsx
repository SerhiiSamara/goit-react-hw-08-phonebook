import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
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
      <GlobalStyle />
    </>
  );
};
