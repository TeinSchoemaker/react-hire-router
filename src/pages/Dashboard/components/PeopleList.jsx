/* eslint-disable react/prop-types */
import PeopleListItem from "./PeopleListItem";

function PeopleList({ people, showEdit }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} showEdit={showEdit} />
      ))}
    </ul>
  );
}

export default PeopleList;
