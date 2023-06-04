const PersonItem = ({ person, handleContactDelete }) => {
  return (
    <p>
      {person.name} {person.number}
      <button onClick={() => handleContactDelete(person.id)}>delete</button>
    </p>
  );
};

export default PersonItem;
