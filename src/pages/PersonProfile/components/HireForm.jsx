/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ mode = "hire", person, hirePeople, updateHiredPerson }) {
  const [wage, setWage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "edit") {
      setWage(person?.wage != null ? String(person.wage) : "");
    }
  }, [mode, person]);

  function handleSubmit(event) {
    event.preventDefault();
    const wageNumber = wage === "" ? "" : Number(wage);
    if (mode === "edit") {
      const id = person?.login?.uuid;
      if (id && updateHiredPerson) {
        updateHiredPerson(id, { wage: wageNumber });
      }
    } else {
      if (hirePeople) {
        hirePeople(person, wageNumber);
      }
    }
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage {mode === "edit" ? "(Edit)" : "Offer"}</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
        step="0.01"
        min="0"
      />
      <button type="submit">{mode === "edit" ? "Save" : "Hire"}</button>
    </form>
  );
}

export default HireForm;
