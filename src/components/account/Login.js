import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { loginAction } from '../../store/accountSlice';
import "./login.css"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory();
    const err = useSelector(state => state.account.err)
    const loggedIn = useSelector(state => state.account.loggedIn)

    useEffect(() => {
        if(loggedIn){
           history.push("/profile") 
        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction({email,password}));
        //history.push("/login")
    }

    return (
        <div className="card card-container">
            <h3 className="text-center">Login</h3>
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={handleSubmit}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus value={email} onChange={(e)=> {setEmail(e.target.value)}}/><br/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                <hr/>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <Link to="/register">
                Don't have an account?
            </Link>
            <p className="text-center" style={{color:'red'}}>
                {
                    err.length > 0 ? 
                    <span>{err[0].message}</span>
                    :
                    <span></span>
                }
            </p>
        </div>
    )
}
