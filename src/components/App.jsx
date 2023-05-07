import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '+',
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

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            name
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
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
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
