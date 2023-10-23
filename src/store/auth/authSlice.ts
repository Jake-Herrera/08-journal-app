import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Status = 'cheking' | 'not-authenticated' | 'authenticated';

export interface authState {
    status: Status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

const initialState: authState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,  action: PayloadAction<number>) => {
        //pass
    },
    logout: (state, action: PayloadAction<number>) => {
        //pass
    },
    checkingCredentials: (state) => {
        state.status = 'cheking';
    }
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions;