import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        allVideos:[]
    },
    reducers:{
        toggleMenu:(state,)=>{
        state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
        state.isMenuOpen = false;
        },
        loadAllVideos:(state, action)=>{
        state.allVideos = Object.assign(state.allVideos, action.payload)
        }
    }
})

export const {toggleMenu, closeMenu, loadAllVideos}= appSlice.actions;
export default appSlice.reducer;