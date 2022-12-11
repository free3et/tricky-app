import { useKeywordSearch } from "../responses/useKeywordSearch";
import { CourseList } from "./CourseList";
import { ErrorMessages } from "../responses/ErrorsMessages";
import { Loader } from "../responses/Loader";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useKeywordContext } from "../context/keywordContext";

export const CourseWrapperPage = () => {
  const search_keyword = useKeywordContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const { response, error, loading } = useKeywordSearch();

  const setQueryParams = (query) => {
    if (query !== undefined && query !== "") {
      searchParams.set("search", query);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => setQueryParams(search_keyword), [search_keyword]);

  return (
    <>
      {error && <ErrorMessages error={error} />}
      {loading && <Loader />}
      <CourseList initialCouses={response.data} />
    </>
  );
};
