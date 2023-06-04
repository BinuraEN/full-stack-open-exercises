import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([,]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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
    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleFormSubmit={handleFormSubmit}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
