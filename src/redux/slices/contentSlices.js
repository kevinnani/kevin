import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

    export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
        try{
            const response = await fetch('https://kevinnani.github.io/kevin/content.json');
            // const response = await fetch('public/content.json');
            // 
            if (!response.ok){
                throw new Error (` HTTP error status: ${response.status}`);
            }
            const data = await response.json();
            return data;
            
        }catch(error) {
            throw new Error('Failed to fetch JSON data : ' + error.message);
        }
    });

const contantSlice = createSlice({
    name: 'content',
    initialState: {
        navbar: [],
        footer: [],
        status: "idle", // "loading" | "succeeded" | "failed"        
        error: null
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContent.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchContent.fulfilled, (state,action) => {
                state.status = "succeede";
                state.navbar = action.payload.navbar
            })
            .addCase(fetchContent.rejected, (state,action) => {
                state.status = "failed";
                state.error = action.error.message
            });
    }
});

export default contantSlice.reducer;
