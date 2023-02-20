import "./login.scss"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {Login} = useContext(AuthContext);

    const handleLogin = () =>{
        Login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Green</h1>
                    <p>
                        Green is a place for plant lovers to come togther to have a community to ask questions and share their knowledge with one another.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login