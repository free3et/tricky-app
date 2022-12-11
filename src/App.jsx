import { useState } from "react";
import "./App.css";
import { SearchInput } from "./course/SearchInput";
import { CourseWrapperPage } from "./course/CourseWrapperPage";
import { KeywordContext } from "./context/keywordContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

document.addEventListener("error", (e) => {
  console.log(error);
});

function App() {
  const [search_keyword, setKeyword] = useState("");
  const [contextValue, setContextValue] = useState("");

  const onKeywordChange = (keyword) => {
    setContextValue(keyword);
  };

  const searchLessons = (keyword) => {
    setKeyword(contextValue);
  };

  return (
    <div className="App">
      <h2>Let's find a suitable lecture by keyword</h2>
      <h3>Please, enter your search query in the field below:</h3>
      <SearchInput onKeywordChange={onKeywordChange} />
      <button onClick={searchLessons}>Search</button>

      <KeywordContext.Provider value={search_keyword}>
        <RouterProvider router={router}>
          <CourseWrapperPage />
        </RouterProvider>
      </KeywordContext.Provider>
    </div>
  );
}

export default App;
