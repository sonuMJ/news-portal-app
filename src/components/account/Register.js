import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import { register } from '../../store/accountSlice';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory();

    const users = useSelector(state => {console.log(state.account)})
    const err = useSelector(state => state.account.err)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, email, password);
        dispatch(register({username,email,password}));
        //history.push("/login")
    }

    return (
        <div className="card card-container">
            <h3 className="text-center">Register</h3>
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={handleSubmit}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text" id="inputUsername" className="form-control" placeholder="Username address" required autoFocus value={username} onChange={(e)=> {setUsername(e.target.value)}}/><br/>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required value={email} onChange={(e)=> {setEmail(e.target.value)}}/><br/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                <hr/>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <Link to="/login">
                Already have an account?
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
