import { nanoid } from 'nanoid';

function Contact({ item }) {
  return <li key={nanoid(5)}>{`${item.name}: ${item.number}`}</li>;
}

export default Contact;
