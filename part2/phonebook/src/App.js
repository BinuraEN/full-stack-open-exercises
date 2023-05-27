import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //check if same name exists
    const existingContact = persons.find((person) => person.name === newName);

    if (existingContact) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newPhoneNumber }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with{" "}
      <input type="text" value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      {persons.map((person) => {
        if (filter.toUpperCase() === "") {
          return (
            <p>
              {person.name} {person.number}
            </p>
          );
        } else {
          if (person.name.toUpperCase().includes(filter.toUpperCase())) {
            return (
              <p>
                {person.name} {person.number}
              </p>
            );
          } else return null;
        }
      })}
    </div>
  );
};

export default App;
