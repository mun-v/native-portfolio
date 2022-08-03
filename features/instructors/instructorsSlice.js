import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchInstructors = createAsyncThunk(
    'instructors/fetchInstructors',
    async () => {
        const response = await fetch(baseUrl + 'instructors');
        return response.json();
    }
);

const instructorsSlice = createSlice({
    name: 'instructors',
    initialState: { isLoading: true, errMess: null, instructorsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchInstructors.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchInstructors.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.instructorsArray = action.payload;
        },
        [fetchInstructors.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const instructorsReducer = instructorsSlice.reducer;
