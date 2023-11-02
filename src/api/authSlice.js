import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    AuthenticatedData: { email: "user@gmail.com", password: "Daud@123" },
    isAuthenticated: false,
  },
  
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (
        email === state.AuthenticatedData.email &&
        password === state.AuthenticatedData.password
      ) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    compare: (state) => {
      return state.AuthenticatedData;
    },
  },
});

export const { login, logout, compare } = authSlice.actions;
export default authSlice.reducer;
