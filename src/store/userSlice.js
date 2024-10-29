import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../api/userApi";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await fetchUsers();
    return response.data;  // Ensure response.data is correct based on the API structure
});

// Slice
const userSlice = createSlice({
    name: "users",
    initialState: { users: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';  // Corrected spelling
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
