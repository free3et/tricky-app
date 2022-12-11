import { useEffect, useState } from "react";
import { useKeywordContext } from "../context/keywordContext";

export const useKeywordSearch = () => {
  const search_keyword = useKeywordContext();

  const [response, setResponse] = useState({ status: "loading" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState(search_keyword);

  function validateResponse(courseData) {
    if (courseData == null) {
      throw new Error("Empty response");
    }

    if (!Array.isArray(courseData)) {
      setError({ message: "Lessons in improper format" });
    }
  }

  useEffect(() => {
    setKeyword(search_keyword);
  }, [search_keyword]);

  const search_keyword_URL = `https://react-course-api.azurewebsites.net/lesson/${keyword}`;

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetch(search_keyword_URL)
      .then((response) => {
        // Networks errors
        if (response.ok) {
          return response.json();
        }
        setLoading(false);
        throw new Error("Network failed", { cause: response.status });
      })
      .then((data) => {
        validateResponse(data);
        setResponse({ data, status: "ok" });
        if (data.length == 0) {
          setError({ message: "no results" });
        }
      })
      .catch((error) => {
        setResponse({ status: "failed", error });
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [keyword]);

  return { response, error, loading };
};
