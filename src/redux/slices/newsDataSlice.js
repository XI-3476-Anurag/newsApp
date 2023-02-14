import {createSlice} from "@reduxjs/toolkit";

const newsDataSlice = createSlice({
    name : "newsDataSlice",
    initialState: {
        newsArray : [],
    },
    reducers:{
        getData : (state, action) => {
            //an array will get passed from there.
            const newsData = action.payload.data;
            const curNews = {
                image: newsData.imageUrl,
                title: newsData.title,
                id : newsData.id,
                time : newsData.time,
                date : newsData.date,
                readMore : newsData.readMoreUrl,
            }
            state.newsArray.push(curNews);
        }
    }
})