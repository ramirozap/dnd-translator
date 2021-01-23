import Filters from "../Filters";
import Table from "../Table";

import { useSpellFilters } from "../hooks/useSpellFilters";
import spells from "../constants/spells";

const Spells = () => {
  const filters = useSpellFilters();
  return (
    <>
      <Filters {...filters} />
      <Table filters={filters} spells={spells} />
    </>
  );
};

export default Spells;
