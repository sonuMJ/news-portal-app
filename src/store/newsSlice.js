import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {URL} from '../constants'

const initialState = {
    status:'loading',
    newsdata:[]
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    
    const response = await axios.get(URL+process.env.REACT_APP_API_KEY)
    return response.data;
})

export const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers: {
        selectBySection: (state) => {

        }
    },
    extraReducers:{
        [fetchNews.pending]:(state, action) => {
            state.status = 'loading'
        },
        [fetchNews.fulfilled]:(state, action) =>{
            state.status = 'success'
            state.newsdata = action.payload.results
        },
        [fetchNews.rejected]:(state,action) => {
            state.status = 'error'
        }
    }
})


export const {selectBySection} = newsSlice.actions;

export default newsSlice.reducer;