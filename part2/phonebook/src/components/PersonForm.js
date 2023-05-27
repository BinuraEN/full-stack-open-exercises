const PersonForm = ({
  newName,
  newPhoneNumber,
  handleFormSubmit,
  handleNameChange,
  handlePhoneNumberChange,
}) => {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number:{" "}
          <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
