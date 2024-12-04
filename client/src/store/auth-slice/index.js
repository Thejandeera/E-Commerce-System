const { createSlice } = require("@redux/toolkit");


const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null
}


const  authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setUser: (state,action)=>{

        }
    }
});

export const {setuser} = authSlice.actions;
export default authSlice.reducer;