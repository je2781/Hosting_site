import {Link} from 'react-router-dom'
import logo from './images/logo.svg'
import lock from './images/lock.svg'
import {useState} from 'react'

const initialState = {
    username: '',
    password: '',
    email: ''
}

const RegisterView = (props) => {
    // const input = useRef()

    const[{username, password, email}, setState] = useState(initialState)
    const[rPassword, setRPassword] = useState('')

    const clearState = () => setState(initialState)
    const clearRPassword = () => setRPassword('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({...prevState, [name]: value}))
    }

    const handleInput = (e) => {
        setRPassword(e.target.value)
    }
    const handleBlur = () => {
        let input = document.forms['sentProfile']['rPassword']

        if (password !== rPassword){
            input.setCustomValidity("password doesn't match")
            clearRPassword()
        }else{
            input.setCustomValidity("") 
        }

        input.reportValidity()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.socket.emit('submitProfile', {username, password, email})
        clearState()
        clearRPassword()        
    }
    return(
        <div id="client-area" className="container-fluid">
            <div className="container">
                <div className="row section">
                    <div className="register-navbar offset-3 col-6 d-flex justify-content-between">
                        <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>
                        <div className="btn-client-area">
                            <img src={lock} alt=""/>Client Area</div>
                    </div>
                    <div className="header-holder offset-3 col-6 d-flex justify-content-center px-4">
                        <span><Link className="text-r" to="/login">Login</Link></span>
                        <span className="text-c">or</span>
                        <span><Link className="text-l" to="/register">Register</Link></span>
                    </div>
                    <form name="sentProfile" className="offset-3 col-6 register-form" onSubmit={handleSubmit}>
                        <div className="section-body px-3">
                            <div className="username">
                                <label for="Username" className="text">Username</label>
                                <input 
                                type="text" 
                                onChange={handleChange}
                                value={username} 
                                name="username" 
                                id="username" 
                                required
                                />
                            </div>
                            <div className="password">
                                <label for="Password" className="text">Password</label>
                                <input 
                                type="password" 
                                onChange={handleChange} 
                                name="password" 
                                value={password} 
                                id="password" 
                                required
                                />
                            </div> 
                            <div className="rPassword">
                                <label for="Repeat password" className="text">Repeat password</label>
                                <input 
                                // ref = {input}
                                type="password"
                                name="rPassword" 
                                onBlur={handleBlur} 
                                onChange={handleInput}
                                value={rPassword}
                                id="rPassword"
                                required
                                />
                            </div>
                            <div className="email">
                                <label for="Email" className="text">Email</label>
                                <input 
                                type="email" 
                                onChange={handleChange} 
                                value={email} 
                                name="email" 
                                id="email" 
                                required
                                />
                            </div>
                        </div>
                        <div className="section-footer d-flex justify-content-end">
                            <button 
                            type="submit" 
                            className="btn"
                            >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 

export default RegisterView