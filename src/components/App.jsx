import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// ---------------------
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const INITIAL_VALUE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = INITIAL_VALUE;

  handleChange = name => e => {
    this.setState(() => ({ [name]: e.target.value }));
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactsList list={filteredContacts} />
      </>
    );
  }
}

export default App;
