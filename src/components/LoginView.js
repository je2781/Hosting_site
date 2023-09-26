import {Link} from 'react-router-dom'
import logo from './images/logo.svg'
import lock from './images/lock.svg'

const LoginView = (props) => {
    return(
        <div id="client-area" className="container-fluid">
            <div className="container">
                <div className="row section">
                    <div className="login-navbar offset-3 col-6 d-flex justify-content-between">
                        <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>
                        <div className="btn-client-area">
                            <img src={lock} alt=""/>Client Area</div>
                    </div>
                    <div className="header-holder offset-3 col-6 d-flex justify-content-center px-4">
                        <span><Link className="text-l" to="/login">Login</Link></span>
                        <span className="text-c">or</span>
                        <span><Link className="text-r" to="/register">Register</Link></span>
                    </div>
                    <form className="offset-3 col-6 login-form">
                        <div className="section-body px-3">
                            <div className="username">
                                <div className="text">Username</div>
                                <input type="text" name="username" id="username" required/>
                            </div>
                            <div className="password">
                                <div className="text">Password</div>
                                <input type="password" name="password" id="password" required/>
                            </div> 
                        </div>
                        <div className="section-footer d-flex justify-content-between">
                            <a href="#">Forgot your password?</a>
                            <button type="submit" className="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 

export default LoginView