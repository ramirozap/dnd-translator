// "Name","Source","Rarity","Type","Attunement","Properties","Weight","Value","Text"

import { useItemFilters } from "../hooks/useItemFilters";
import { items } from "../constants/items";

const Items = () => {
  const { searchTerm, setSearchTerm } = useItemFilters();

  const filteredList = items
    .filter(
      (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Translation.es.toLowerCase().includes(searchTerm.toLowerCase())
    )
    //.sort(sortFunction)
    .map(({ Name, Translation, Type }, index) => (
      <tr key={Name} className={index % 2 === 0 ? "pair" : "odd"}>
        <td>{Name}</td>
        <td>{Translation.es}</td>
        <td>{Type}</td>
      </tr>
    ));

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr className="odd">
            <th>Nombre</th>
            <th>Traducción </th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>{filteredList}</tbody>
      </table>
    </>
  );
};

export default Items;
