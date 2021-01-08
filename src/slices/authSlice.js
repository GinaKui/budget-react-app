import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebase, googleAuthProvider } from '../firebase'

const initialState = {
  uid: null
}

export const login = createAsyncThunk('auth/login', async () => {
  const result = await firebase.auth().signInWithPopup(googleAuthProvider);
  return result.user.uid;
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await firebase.auth().signOut();
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.uid = action.payload
    },
    [logout.fulfilled]: state => {
      state.uid = null;
    } 
  }
});

export default authSlice.reducer;