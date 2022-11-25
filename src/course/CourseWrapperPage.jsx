import { useKeywordSearch } from "../responses/useKeywordSearch";
import { CourseList } from "./CourseList";
import { ErrorMessages } from "../responses/ErrorsMessages";
import { Loader } from "../responses/Loader";

export const CourseWrapperPage = () => {
  const { response, error, loading } = useKeywordSearch();

  return (
    <>
      {error && <ErrorMessages error={error} />}
      {loading && <Loader />}
      <CourseList initialCouses={response.data} />
    </>
  );
};
