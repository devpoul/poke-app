import { createSlice } from "@reduxjs/toolkit";

/*createSlice es una función que se debe ejecutar () y recibe como parámetro*/
const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    setUserNameGlobal: (state, action) => action.payload
  },
});

export const {setUserNameGlobal} = userNameSlice.actions

export default userNameSlice.reducer;



