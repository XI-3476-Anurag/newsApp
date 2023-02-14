import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("news/fetch", async()=>{
    const response = await fetch(`https://inshorts.deta.dev/news?category=science}`);
    const jsonData = await response.json();
    return jsonData;
    // console.log("hey", jsonData.data); 
});

const newsSlice = createSlice({
    name : "newsSlice",
    initialState:{
        newsArr : [],
        status : "idle",
        error: null,
    },
    reducers:{
        loadNewsArr : (state, action) => {
            state.newsArr = action.payload;
        },
    },
    extraReducers: function (builder){
        builder
        .addCase(fetchData.pending, (state,action) => {
            state.status = "loading";
        })
        .addCase(fetchData.fulfilled, (state,action)=>{
            state.newsArr = action.payload;
            state.status= "success"
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }

})


export const {loadNewsArr} = newsSlice.actions;
export default newsSlice.reducer;