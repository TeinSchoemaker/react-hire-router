/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";

function PersonProfile({ people, hirePeople }) {
  const [person, setPerson] = useState(null);
  const personId = useParams();

  useEffect(() => {
    const addPerson = people.find((p) => p.login.uuid === personId.id);
    setPerson(addPerson);
  }, []);

  if (!person) return <p>Loading...</p>;

  return (
    <article className="profile">
      <h2 className="profilename">
        {person.name.first} {person.name.last}
      </h2>
      <div className="profile-info">
        <img src={person.picture.large} />
        <div className="basic-info">
          <ul>
            <li>
              <strong>Email:</strong>
              {person.email}
            </li>
            <li>
              <strong>Phone:</strong>
              {person.phone}
            </li>
          </ul>
        </div>
      </div>
      <HireForm person={person} hirePeople={hirePeople} />
    </article>
  );
}

export default PersonProfile;
