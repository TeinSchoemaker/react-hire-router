import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

function App() {
  const url = "https://randomuser.me/api/?results=50";
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results || []);
    };
    fetchPeople();
  }, []);

  function hirePeople(person, wage) {
    setHiredPeople((prev) => [...prev, { ...person, wage }]);
  }

  return (
    <div className="container">
      <h1>Hire Your Team</h1>

      <div className="container-nav-main">
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<Dashboard people={people} hiredPeople={hiredPeople} />}
            />
            <Route
              path="/view/:id"
              element={
                <PersonProfile people={people} hirePeople={hirePeople} />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
