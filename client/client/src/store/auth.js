import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {
     value:{}
  };
  const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state,action) {
            state.value = action.payload;
          }
    }
  })
export const authActions = authSlice.actions;
export default authSlice.reducer;