import styled from "@emotion/styled";
import { Lesson } from "./Lesson.jsx";

const LessonCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CourseList = ({ initialCouses }) => {
  if (initialCouses === undefined) return;
  return (
    <LessonCard className="lesson_card">
      {Object.values(initialCouses).map((lesson, index) =>
        lesson.hidden ? null : <Lesson key={lesson.name} lesson={lesson} />
      )}
    </LessonCard>
  );
};
