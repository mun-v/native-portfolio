import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "../features/courses/coursesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { instructorsReducer } from "../features/instructors/instructorsSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { favoritesReducer } from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    comments: commentsReducer,
    instructors: instructorsReducer,
    promotions: promotionsReducer,
    favorites: favoritesReducer,
  },
});
