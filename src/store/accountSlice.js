import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    err:[],
    loggedIn:false
}

export const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers: {
        register:(state,action) => {
            state.err = []
            const {email} = action.payload;
            let registered = JSON.parse(localStorage.getItem("account"));
            if(registered){
                let existEmail = registered.find(user => user.email === email);
                if(existEmail){
                    state.err.push({"message":"Already registered"})
                }else{
                    let newUser = [...registered,action.payload];
                    localStorage.setItem("account", JSON.stringify(newUser))
                }
            }else{
                localStorage.setItem("account",JSON.stringify([action.payload]))
            }
        },
        loginAction:(state,action) => {
            state.err = []
            const {email,password} = action.payload;
            let registered = JSON.parse(localStorage.getItem("account"));
            if(registered){
                const registredEmail = registered.find(user => user.email === email);
                if(registredEmail){
                    if(registredEmail.password == password){
                        state.loggedIn = true
                        state.user = registredEmail
                    }else{
                        state.err.push({"message":"Invalid credentials"})
                    }
                }else{
                    state.err.push({"message":"Invalid credentials"})
                }
            }else{
                state.err.push({"message":"Invalid account.Please register"})
            }
            
        },
        logout:(state) => {
            state.user = [];
            state.loggedIn = false;
        },
        resetpassword : (state,action) => {
            let registered = JSON.parse(localStorage.getItem("account"));
            const newState = registered.map(obj =>
                obj.email === state.user.email ? { ...obj, password:action.payload } : obj
            );
        }
    }
})

export const {register, loginAction, logout,resetpassword} = accountSlice.actions;

export default accountSlice.reducer;