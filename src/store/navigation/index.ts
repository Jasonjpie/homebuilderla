import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface NavigationState {
  currentSection: string
}

const initialState: NavigationState = {
  currentSection: '/home',
}

export const NavigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentSection: (state, action:PayloadAction<string>) => {
      state.currentSection = action.payload
    },
  },
})

export const { setCurrentSection } = NavigationSlice.actions

export default NavigationSlice.reducer