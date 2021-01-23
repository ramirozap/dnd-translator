import { useState } from "react";

export const useItemFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  };
};
