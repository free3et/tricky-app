import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ErrorMessagesBlock = styled.div`
  color: #d10062;

  font-size: 1.2em;
`;

export function ErrorMessages(error) {
  const [cause, setCause] = useState("");

  useEffect(() => {
    switch (true) {
      case error.error.cause == 500:
        setCause("Network error 500: Internal Server Error");
        break;
      case error.error.cause == 404:
        setCause("Let's try to find this word");
        break;
      case error.error.message == "Failed to fetch":
        setCause("Network error: check your internet connection");
        break;
      case error.error.message == "no results":
        setCause("There are no results for this keyword");
        break;
      case error.error.message == "Lessons in improper format":
        setCause("Lessons in improper format");
        break;

      default:
        setCause(error);
    }
  }, [error]);

  return (
    <ErrorMessagesBlock>
      <h4>{cause}</h4>
    </ErrorMessagesBlock>
  );
}
