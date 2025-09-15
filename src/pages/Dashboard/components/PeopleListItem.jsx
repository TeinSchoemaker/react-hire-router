/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function PeopleListItem({ person, showEdit }) {
  return (
    <li>
      <h3>
        <Link to={`/view/${person.login?.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {showEdit && person.login?.uuid && (
        <p>
          <Link to={`/edit/${person.login.uuid}`}>Edit</Link>
        </p>
      )}
    </li>
  );
}

export default PeopleListItem;
