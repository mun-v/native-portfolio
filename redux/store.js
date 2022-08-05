import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "../features/courses/coursesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { instructorsReducer } from "../features/instructors/instructorsSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { favoritesReducer } from "../features/favorites/favoritesSlice";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const store = configureStore({
  reducer: persistCombineReducers(config, {
    courses: coursesReducer,
    comments: commentsReducer,
    instructors: instructorsReducer,
    promotions: promotionsReducer,
    favorites: favoritesReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
