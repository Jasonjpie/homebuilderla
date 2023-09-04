import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface ScrollableState {
  scrollToTop:boolean,
  scrollToBottom:boolean,
  scrollHeight: number,
  scrollTop:number,
}

const initialState: ScrollableState = {
    scrollToTop:false,
    scrollToBottom:false,
    scrollHeight: 0,
    scrollTop:0,
}

export const ScrollableSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollHeight: (state, action:PayloadAction<number>) =>{
        state.scrollHeight = action.payload
    },
    setScrollTop: (state, action:PayloadAction<number>) =>{
        state.scrollTop = action.payload
    },
    setScrollToTop: (state, action:PayloadAction<boolean>) =>{
        state.scrollToTop = action.payload
    },
    setScrollToBottom: (state, action:PayloadAction<boolean>) =>{
        state.scrollToBottom = action.payload
    }
  },
})

export const { setScrollHeight, setScrollTop, setScrollToTop, setScrollToBottom } = ScrollableSlice.actions

export default ScrollableSlice.reducer