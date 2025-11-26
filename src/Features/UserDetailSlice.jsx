import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
  const response = await fetch("https://692691bc26e7e41498fab33f.mockapi.io/crud",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
  }
  );

  try {
    const result= await Response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    extraReducer:{
      [createUser.pending]:(state)=>{
        state.loading =true;
      },
      [createUser.fulfilled]:(state,action)=>{
        state.loading =flase;
        
      },

    }
  },
  // reducers: {
  //   // Example reducer (optional)
  //   addUser: (state, action) => {
  //     state.users.push(action.payload);
  //   }
  // }
});

// Export actions if you need them
export const { addUser } = userDetailSlice.actions;

// Export reducer correctly
export default userDetailSlice.reducer;
