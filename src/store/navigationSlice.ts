import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentPage: string;
  isMenuOpen: boolean;
  scrollPosition: number;
}

const initialState: NavigationState = {
  currentPage: 'home',
  isMenuOpen: false,
  scrollPosition: 0,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { setCurrentPage, toggleMenu, setMenuOpen, setScrollPosition } = navigationSlice.actions;
export default navigationSlice.reducer;
