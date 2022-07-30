import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch(baseUrl + "courses");
    return response.json();
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: { isLoading: true, errMess: null, coursesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.coursesArray = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const coursesReducer = coursesSlice.reducer;
