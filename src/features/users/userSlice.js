import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name,
        emailid,
        username,
        mobile,
        rolekey,
        password } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.emailid = emailid;
        existingUser.username = username;
        existingUser.mobile = mobile;
        existingUser.rolekey = rolekey;
        existingUser.password = password;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;