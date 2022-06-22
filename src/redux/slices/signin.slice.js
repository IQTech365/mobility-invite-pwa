import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
import Api from '../../api/Api';
import * as Endpoints from '../../api/api-endpoints';

const initialState = {
  loading: false,
  signInSuccess: true,
  signInError: null,
  user: null,
};

export const doSignIn = createAsyncThunk('admin/signin', async (data) => {
  try {
    const response = await Api.doPost(Endpoints.signinURL, data);
    return response;
  } catch (error) {
    // toast.error(error);
  }
});

const SignInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    // TODO: add local reducer logic here.
  },
  extraReducers: (builder) => {
    builder.addCase(doSignIn.fulfilled, (state, action) => {
      const { data } = action.payload;
      const _data = { token: data.token, ...data.user };
      localStorage.setItem('token', data.token)
      state.loading = false;
      state.signInSuccess = true;
      state.user = _data;
    });
    builder.addCase(doSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doSignIn.rejected, (state, action) => {
      state.loading = false;
      state.signInSuccess = false;
      state.signInError = action.payload;
    });
  },
});

export default SignInSlice.reducer;
