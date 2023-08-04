
import { createSlice}  from'@reduxjs/toolkit'

// 

const initialState = {
    user : null,
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : ""
}


initialState.isadmin = true;


const authSlice = createSlice ({
    name : "auth",
    initialState,
    reducers : {

    },
    extraReducers : (bulider) => {

    }
})


export default authSlice.reducer