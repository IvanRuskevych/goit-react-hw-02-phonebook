import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Contact({ item, deleteContact }) {
  return (
    <>
      <li key={nanoid(5)}>{`${item.name}: ${item.number}`}</li>
      <button type="submit" onClick={() => deleteContact(item.id)}>
        delete
      </button>
    </>
  );
}

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Contact;
