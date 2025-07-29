import { React } from 'react'
import './login.css'
import { Link } from 'react-router'

const Login=()=>{
    return(
        <div className="AddUser">
            <h3>Login</h3>
            <form className="formUser">
                <div className="Pageform">
                 <label>Email</label>
                 <input
                 type="email"
                 id="email"
                 placeholder="Enter email"
                 />
                 <label>Password</label>
                 <input
                 type="pass"
                 id="password"
                 placeholder="Enter password"
                 />
                 

                 <button type="submit" className="buttton">Login</button>

                </div>
            

            </form>

            <div className="login"><label >Create Account here</label>
            <Link to="/signup">Signup</Link></div>
            </div>
    )
}
export default Login;


