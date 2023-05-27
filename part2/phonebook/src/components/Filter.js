const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <>
      filter shown with{" "}
      <input type="text" value={filterValue} onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
