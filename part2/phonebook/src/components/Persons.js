import PersonItem from "./PersonItem";

const Persons = ({ persons, filter }) => {
  return (
    <>
      {persons.map((person) => {
        if (filter.toUpperCase() === "") {
          return <PersonItem key={person.name} person={person} />;
        } else {
          if (person.name.toUpperCase().includes(filter.toUpperCase())) {
            return <PersonItem key={person.name} person={person} />;
          } else return null;
        }
      })}
    </>
  );
};

export default Persons;
