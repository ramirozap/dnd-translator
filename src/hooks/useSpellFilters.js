import { useState } from "react";

export const useSpellFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  return {
    searchTerm,
    setSearchTerm,
    selectedProfession,
    setSelectedProfession,
    selectedLevel,
    setSelectedLevel,
  };
};
