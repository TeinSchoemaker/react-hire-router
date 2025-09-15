/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import HireForm from "./components/HireForm";

function PersonProfile({ mode = "view", people, hiredPeople = [], hirePeople, updateHiredPerson }) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  const isEdit = mode === "edit";

  const sourceList = useMemo(() => (isEdit ? hiredPeople : people), [isEdit, hiredPeople, people]);

  useEffect(() => {
    const found = sourceList?.find((p) => p.login?.uuid === id);
    setPerson(found || null);
  }, [id, sourceList]);

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
      <HireForm
        mode={isEdit ? "edit" : "hire"}
        person={person}
        hirePeople={hirePeople}
        updateHiredPerson={updateHiredPerson}
      />
    </article>
  );
}

export default PersonProfile;
