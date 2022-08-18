import { useMemo } from 'react';

import Container from './Container';
import { ContactFormed } from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContacts, filteredContact, getFilter } from '../redux/store';


export default function App() {
  const dispatch = useDispatch();
  const contacted = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const addContact = ({ name, number }) => {
    const filtered = contacted.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!filtered) {
      dispatch(add({ name, number }));
      return;
    }
    alert(`${name} is already in contacts`)
  }

  const handlerFilter = e => {
    dispatch(filteredContact(e.target.value))
  }

  const filteredPlanets = useMemo(
    () => {
      return contacted.filter(contact =>
        contact.name.toLowerCase().includes(filter) || contact.name.toUpperCase().includes(filter))
    },
    [contacted, filter]
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactFormed
        addContact={addContact}
      />

      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={handlerFilter}
      />
      <ContactList
        value={filteredPlanets}
      />
    </Container>
  )
}