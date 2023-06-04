import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import noteService from "./services";

const App = () => {
  const [persons, setPersons] = useState([,]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    noteService.getAll().then((data) => {
      setPersons(data);
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
      if (existingContact.number !== newPhoneNumber) {
        if (
          window.confirm(
            `${existingContact.name} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const newContact = { ...existingContact, number: newPhoneNumber };
          noteService
            .update(newContact)
            .then((data) => {
              setPersons(
                persons.map((person) =>
                  person.id !== existingContact.id ? person : data
                )
              );
              setNewName("");
              setNewPhoneNumber("");
            })
            .catch((err) => {
              console.log("could not save data due to error: ", err);
            });
          return;
        }
      }

      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewPhoneNumber("");
      return;
    }

    const newContact = { name: newName, number: newPhoneNumber };

    noteService
      .create(newContact)
      .then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewPhoneNumber("");
      })
      .catch((err) => {
        console.log("could not save data due to error: ", err);
      });
  };

  const handleContactDelete = (id) => {
    const person = persons.find((person) => person.id === id);

    if (person) {
      if (window.confirm(`Delete ${person.name} ?`)) {
        noteService
          .remove(id)
          .then((data) => {
            setPersons(persons.filter((person) => person.id !== id));
          })
          .catch((err) => {
            console.log("could not delete contact due to error: ", err);
          });
      }
    }
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
      <Persons
        persons={persons}
        filter={filter}
        handleContactDelete={handleContactDelete}
      />
    </div>
  );
};

export default App;
