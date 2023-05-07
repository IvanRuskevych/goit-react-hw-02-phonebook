import PropTypes from 'prop-types';

function Filter({ filterValue, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange('filter')}
      />
    </label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
