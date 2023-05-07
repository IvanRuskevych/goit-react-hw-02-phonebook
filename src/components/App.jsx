import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '+',
    filter: '',
  };

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

  handleSubmit = e => {
    e.preventDefault();

    this.addContact(this.state);
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
        <h2>Phonebook</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
          </label>
          <label>
            Password
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange('number')}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
          </label>
          <button type="submit">Add contact</button>
          <br />
          <label>
            Filter
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange('filter')}
            />
          </label>
        </form>

        <h2>Contacts</h2>
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={nanoid(5)}>{`${contact.name}: ${contact.number}`}</li>
            );
          })}
        </ul>
      </>
    );
  }

  // ----------------------
}

export default App;
