import { useState } from "react";
import "./App.css";
import spells from "./constants/spells";
import professionNames from "./constants/professions";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const filterByProfession = (professions) => {
    if (!selectedProfession) {
      return true;
    }
    return professions.hasOwnProperty(selectedProfession);
  };

  const filterByLevel = (level) => {
    if (!selectedLevel) {
      return true;
    }
    return level === selectedLevel;
  };

  const filteredList = spells
    .filter(
      (spell) =>
        spell.page.includes("phb") &&
        filterByLevel(spell.level) &&
        filterByProfession(spell.professions) &&
        (spell.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          spell.translation.es
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()))
    )
    .sort((spellA, spellB) => (spellA.name > spellB.name ? 1 : -1))
    .map(({ name, translation, level, school, professions }) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{translation.es}</td>
        <td>{level === "0" ? "Truco" : level}</td>
        <td>
          {Object.keys(professions).map((profession) => (
            <span key={profession}>{profession} </span>
          ))}
        </td>
        <td>{school}</td>
      </tr>
    ));

  return (
    <div className="App">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        onChange={(e) => setSelectedProfession(e.target.value)}
        value={selectedProfession}
      >
        <option value=""></option>
        {Object.entries(professionNames)
          .sort(([, { es: profA }], [, { es: profB }]) =>
            profA > profB ? 1 : -1
          )
          .map(([key, { es }]) => (
            <option value={key} key={key}>
              {es}
            </option>
          ))}
      </select>
      <select
        onChange={(e) => setSelectedLevel(e.target.value)}
        value={selectedLevel}
      >
        <option value=""></option>
        <option value={"0"}>0</option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
        <option value={"6"}>6</option>
        <option value={"7"}>7</option>
        <option value={"8"}>8</option>
        <option value={"9"}>9</option>
      </select>
      {filteredList.length}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Traducción</th>
            <th>Nivel</th>
            <th>Clases</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>{filteredList}</tbody>
      </table>
    </div>
  );
}

export default App;
