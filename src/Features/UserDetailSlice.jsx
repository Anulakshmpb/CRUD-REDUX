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

// read actoin
 export const showUser = createAsyncThunk("showUser",async(args ,{rejectWithValue})=>{

  const response =await fetch("https://692691bc26e7e41498fab33f.mockapi.io/crud");
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducer:{
      [createUser.pending]:(state)=>{
        state.loading =true;
      },
      [createUser.fulfilled]:(state,action)=>{
        state.loading =false;
        state.users.push(action.payload);
      },
       [createUser.rejected]:(state,action)=>{
        state.loading =false;
        state.error = action.payload.message;
      },
      [showUser.pending]:(state)=>{
        state.loading =true;
      },
      [showUser.fulfilled]:(state,action)=>{
        state.loading =false;
        state.users=action.payload;
      },
       [showUser.rejected]:(state,action)=>{
        state.loading =false;
        state.error = action.payload;
      },

    }
});


export const { addUser } = userDetailSlice.actions;

// Export reducer correctly
export default userDetailSlice.reducer;
