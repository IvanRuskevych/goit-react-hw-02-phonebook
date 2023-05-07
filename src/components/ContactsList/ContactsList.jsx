import Contact from 'components/Contact/Contact';
import { nanoid } from 'nanoid';
import React from 'react';

function ContactsList({ list }) {
  return (
    <ul>
      {list.map(contact => {
        return (
          <Contact item={contact} key={nanoid(5)} />
          // <li key={nanoid(5)}>{`${contact.name}: ${contact.number}`}</li>
        );
      })}
    </ul>
  );
}

export default ContactsList;
