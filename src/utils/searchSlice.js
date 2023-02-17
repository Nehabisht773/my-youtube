import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchStr:"",
        searchResults:[]

    },
    reducers:{
        cacheResults:(state,action)=>{
            // state =  {...state, ...action.payload}
            Object.assign(state, action.payload)
        },
        searchString:(state, action)=>{
           state.searchStr = action.payload
        },
        searchVideos:(state,action)=>{
            Object.assign(state.searchResults, action.payload) 
        }

    }
})

export const {cacheResults , searchString, searchVideos} = searchSlice.actions;
export default searchSlice.reducer 