import { useState, useEffect } from "react";
import "./App.css";
import { SearchInput } from "./course/SearchInput";
import { CourseWrapperPage } from "./course/CourseWrapperPage";
import { KeywordContext } from "./context/keywordContext";

document.addEventListener("error", (e) => {
  console.log(error);
});

function App() {
  const [search_keyword, setKeyword] = useState("");

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);
  };

  useEffect(() => onKeywordChange(search_keyword), [search_keyword]);

  return (
    <div className="App">
      <h2>Let's find a suitable lecture by keyword</h2>
      <h3>Please, enter your search query in the field below:</h3>
      <SearchInput onKeywordChange={onKeywordChange} />

      <KeywordContext.Provider value={search_keyword}>
        <CourseWrapperPage />
      </KeywordContext.Provider>
    </div>
  );
}

export default App;
