function Filter({ value, onChange }) {
  return (
    <label>
      Filter
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange('filter')}
      />
    </label>
  );
}

export default Filter;
