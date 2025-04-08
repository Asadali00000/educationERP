import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenuOpen: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenu: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenu } = navigationSlice.actions;

export const selectMobileMenuOpen = (state) => state.navigation.mobileMenuOpen;

export default navigationSlice.reducer;
