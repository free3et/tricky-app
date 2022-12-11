import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { CourseWrapperPage } from "./course/CourseWrapperPage";
import { ROUTES } from "./routes";
import { Lesson } from "./course/Lesson";
import { fetchLessonByIdRouted } from "./responses/fetchLessonById";

export const router = createBrowserRouter([
  {
    path: ROUTES.lessons,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CourseWrapperPage />,
      },
      {
        path: ROUTES.lesson(),
        element: <Lesson />,
        loader: fetchLessonByIdRouted,
      },
    ],
  },
]);
