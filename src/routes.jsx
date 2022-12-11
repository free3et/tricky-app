export const ROUTES = {
  lessons: "/course-with-router/lesson",
  lesson: (id) =>
    id
      ? `/course-with-router/lesson/${id}`
      : "/course-with-router/lesson/:lessonId",
};
