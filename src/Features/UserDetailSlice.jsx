import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
  try {
    const response = await fetch("https://692691bc26e7e41498fab33f.mockapi.io/crud",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message || error);
  }
})

// read actoin
 export const showUser = createAsyncThunk("showUser",async(args ,{rejectWithValue})=>{

  try {
    const response = await fetch("https://692691bc26e7e41498fab33f.mockapi.io/crud");
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message || error);
  }
})

// delete actoin
 export const deleteUser = createAsyncThunk("deleteUser",async(id ,{rejectWithValue})=>{

  try {
    const response = await fetch(`https://692691bc26e7e41498fab33f.mockapi.io/crud/${id}`,
     {method:"DELETE"} 
    );
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message || error);
  }
})


//update action
export const updateUser = createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
  try {
    const response = await fetch(`https://692691bc26e7e41498fab33f.mockapi.io/crud/${data.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message || error);
  }
})
export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData:[],
  },
  reducers :{
    searchUser :(state,action)=>{
      console.log(action.payload);
      state.searchData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ?? [];
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const{id}=action.payload;
        if(id){
          state.users = state.users.filter((ele)=>ele.id !== id);
        }
       console.log("delete action",action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele)=>
          ele.id === action.payload.id ? action.payload : ele
        )
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error?.message;
      });
  }
});

export const { addUser ,searchUser } = userDetailSlice.actions;

export default userDetailSlice.reducer;
