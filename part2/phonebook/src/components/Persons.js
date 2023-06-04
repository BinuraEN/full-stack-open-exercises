import PersonItem from "./PersonItem";

const Persons = ({ persons, filter, handleContactDelete }) => {
  return (
    <>
      {persons.map((person) => {
        if (filter.toUpperCase() === "") {
          return (
            <PersonItem
              key={person.name}
              person={person}
              handleContactDelete={handleContactDelete}
            />
          );
        } else {
          if (person.name.toUpperCase().includes(filter.toUpperCase())) {
            return (
              <PersonItem
                key={person.name}
                person={person}
                handleContactDelete={handleContactDelete}
              />
            );
          } else return null;
        }
      })}
    </>
  );
};

export default Persons;
