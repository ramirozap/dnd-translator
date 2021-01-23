import { useState } from "react";

const Table = ({ spells, filters }) => {
  const { selectedProfession, selectedLevel, searchTerm } = filters;

  const [sortedBy, setSortedBy] = useState("name");
  const [isAscendingSort, setIsAscendingSort] = useState(true);

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

  const handleSort = (fieldName) => {
    setIsAscendingSort((currentSort) =>
      fieldName === sortedBy ? !currentSort : true
    );
    setSortedBy(fieldName);
  };

  const sortFunction = (spellA, spellB) => {
    if (sortedBy === "translation") {
      return isAscendingSort
        ? Intl.Collator().compare(spellA.translation.es, spellB.translation.es)
        : Intl.Collator().compare(spellB.translation.es, spellA.translation.es);
    }
    return isAscendingSort
      ? Intl.Collator().compare(spellA[sortedBy], spellB[sortedBy])
      : Intl.Collator().compare(spellB[sortedBy], spellA[sortedBy]);
  };

  const filteredList = spells
    .filter(
      (spell) =>
        spell.page.includes("phb") &&
        filterByLevel(spell.level) &&
        filterByProfession(spell.professions) &&
        (spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          spell.translation.es.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort(sortFunction)
    .map(({ name, translation, level, school, professions }, index) => (
      <tr key={name} className={index % 2 === 0 ? "pair" : "odd"}>
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
    <table>
      <thead>
        <tr className="odd">
          <th className="sortable" onClick={() => handleSort("name")}>
            Nombre {sortedBy === "name" ? (isAscendingSort ? "▲" : "▼") : ""}
          </th>
          <th className="sortable" onClick={() => handleSort("translation")}>
            Traducción{" "}
            {sortedBy === "translation" ? (isAscendingSort ? "▲" : "▼") : ""}
          </th>
          <th className="sortable" onClick={() => handleSort("level")}>
            Nivel {sortedBy === "level" ? (isAscendingSort ? "▲" : "▼") : ""}
          </th>
          <th>Clases</th>
          <th>School</th>
        </tr>
      </thead>
      <tbody>{filteredList}</tbody>
    </table>
  );
};

export default Table;
