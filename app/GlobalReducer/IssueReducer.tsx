// Assuming this is in issuesSlice.ts
'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userId: number | undefined;
}

const initialState: User = {
  userId: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<User>) => {
      state.userId = action.payload.userId;
    },
  
    // Add other reducer functions if needed
  },
});

// Export the generated reducer and action creators
export const { setUserId} = userSlice.actions;
export default userSlice.reducer;
