import { createContext, useContext } from "react";

const defaultKeywordContext = {
  search_keyword: "",
};

export const KeywordContext = createContext(defaultKeywordContext);
export const useKeywordContext = () => {
  return useContext(KeywordContext);
};
