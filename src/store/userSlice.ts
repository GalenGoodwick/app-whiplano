// store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  twitter: string;
  telegram: string;
  pfpUri: string; // Profile picture URI
}

const initialState: UserState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  bio: "",
  twitter: "",
  telegram: "",
  pfpUri: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.bio = action.payload.bio;
      state.twitter = action.payload.twitter;
      state.telegram = action.payload.telegram;
      state.pfpUri = action.payload.pfpUri;
    },
    updateUser(state, action: PayloadAction<Partial<UserState>>) {
      // Update only the changed fields
      state = { ...state, ...action.payload };
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
