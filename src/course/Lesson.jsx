import styled from "@emotion/styled";
import { useLoaderData } from "react-router-dom";
import { useKeywordSearch } from "../responses/useKeywordSearch";

const StyledForm = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 450px;
  margin: 20px;
  margin-top: 32px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-top: 10px solid #7f78ac;
  border-radius: 15px;
  background-color: #3e3b3b;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-decoration: none;

  h2 {
    margin: 15px 0 0;
    font-weight: 700;
    line-height: 1.3;
  }

  h3 {
    margin: 1.5em 0;
  }

  h4 {
    color: #938acd;
  }

  ul {
    align-self: flex-start;
    margin: 0;
    padding-inline-start: 18px;
  }

  li {
    text-align: left;
    font-size: 0.9em;
    line-height: 1.5;
  }
`;

const LinksBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    box-sizing: border-box;
    margin: 5px auto;
    padding: 0.6em 1.2em;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #7f78ac;
    color: #ffffff;
    font-family: inherit;
    font-weight: 500;
    font-size: 1em;
    cursor: pointer;
    transition: border, background-color 0.3s;

    &:hover {
      border: 1px solid #4b1549;
      background-color: #60226f;
      color: #ffffff;
    }
  }
`;

const BorderList = styled.div`
  p {
    width: 100%;
    padding-left: 12px;
    border-left: 2px solid #7439ab;
    word-break: break-word;
    font-size: 0.9em;
    line-height: 1.2;
    text-align: left;
  }
`;

export const Lesson = () => {
  const lesId = useLoaderData();
  const { response } = useKeywordSearch();

  if (response.data === undefined) return;

  return (
    <div className="lesson_card">
      {Object.values(response.data).map((lesson, index) =>
        lesson.name === lesId ? (
          <StyledForm key={index}>
            <h2>Title: {lesson.title}</h2>
            <h3>Type: {lesson.type}</h3>
            <LinksBlock className="links_block">
              <a href={lesson.youtube} target="_blank">
                See On Youtube
              </a>
            </LinksBlock>
            {lesson.keyPoints.length > 0 && (
              <div>
                <h4>Key Points:</h4>
                <ul>
                  {lesson.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4>Links</h4>
              <LinksBlock className="links_block">
                {lesson.links.map((link) => {
                  Object.values(link);
                  return (
                    <a
                      className="hometask_links"
                      href={link[1]}
                      key={link}
                      target="_blank"
                    >
                      {link[0]}
                    </a>
                  );
                })}
              </LinksBlock>
            </div>
          </StyledForm>
        ) : null
      )}
    </div>
  );
};
