import professionNames from "./constants/professions";

const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedProfession,
  setSelectedProfession,
  selectedLevel,
  setSelectedLevel,
}) => (
  <>
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
  </>
);

export default Filters;
