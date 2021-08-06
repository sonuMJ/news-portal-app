import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from '../../store/accountSlice'


export default function Header() {

    const dispatch = useDispatch();
    const loggedin = useSelector(state => state.account.loggedIn)
    const user = useSelector(state => state.account.user)

    useEffect(() => {
        
    }, [])

    useEffect(() => {
    }, [loggedin])

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">News Portal</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/readlater">Read Later</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {
                        loggedin ? 
                        <>
                            <li><Link to="/login">{user.username}</Link></li>
                            <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
                        </> 
                        : 
                        <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        </>
                    }
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}
