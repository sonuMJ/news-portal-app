import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { resetpassword } from '../../store/accountSlice';

export default function Profile() {

    const [display, setDisplay] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const dispatch = useDispatch();

    const handleBtn = (btn) => {
        setDisplay(btn)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmpassword){
            dispatch(resetpassword(password))
        }else{
            alert("Password mismatch")
        }
    }



    return (
        <div>
            <div className="row">
                <div className="col-lg-4"><button className="btn btn-primary" onClick={() => handleBtn("changepassword")}>Change password</button></div>
                <div className="col-lg-4"><button className="btn btn-success" onClick={() => handleBtn("changeusername")}>Change username</button></div>
                <div className="col-lg-4"><button className="btn btn-danger" onClick={() => handleBtn("deleteaccount")}>Delete Account</button></div>
            </div>
            <div>
                {
                    display == "changepassword" && <Changepassword password={password} confirmpassword={confirmpassword} handleSubmit={handleSubmit} setPassword={(e) => setPassword(e.target.value)} setConfirmpassword={(e) => setConfirmpassword(e.target.value)}/>
                }
            </div>
        </div>
        
    )

    
}
const Changepassword = (props) => {
    return(
        <div className="card card-container">
            <h3 className="text-center">Reset password</h3>
            <form className="form-signin" onSubmit={(e) => props.handleSubmit(e)}>
                <input type="password" id="inputPassword2" className="form-control" placeholder="Password" required value={props.password} onChange={(e)=> {props.setPassword(e)}}/><br/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Confirm Password" required value={props.confirmpassword} onChange={(e)=> {props.setConfirmpassword(e)}}/>
                <hr/>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Reset</button>
            </form>
        </div>
    )
}