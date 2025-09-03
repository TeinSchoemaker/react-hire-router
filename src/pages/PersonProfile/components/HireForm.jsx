/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ person, hirePeople }) {
  const [wage, setWage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    hirePeople(person, wage);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
        step="0.01"
        min="0"
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
