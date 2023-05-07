import { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state);
  };
  handleChange = name => e => {
    this.setState(() => ({ [name]: e.target.value }));
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Password
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
