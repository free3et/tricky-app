import styled from "@emotion/styled";
import { Lesson } from "./Lesson.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

const LessonCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
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
`;
export const CourseList = ({ initialCouses }) => {
  if (initialCouses === undefined) return;
  return (
    <LessonCard className="lesson_card">
      {Object.values(initialCouses).map((lesson, index) =>
        lesson.hidden ? null : (
          <Card key={index}>
            <NavLink className="read-more" to={ROUTES.lesson(lesson.name)}>
              To card
              </NavLink>

            <h2>Title: {lesson.title}</h2>
            <h3>Type: {lesson.type}</h3>
          </Card>
        )
      )}
    </LessonCard>
  );
};
