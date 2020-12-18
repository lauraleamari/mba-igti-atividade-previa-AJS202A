import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = ({ target }) => {
        setEmail(target.value);
    }

    const handleChangePassword = ({ target }) => {
        setPassword(target.value)
    }

    return (
        <div id="page-login">
            <Navbar />
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                className="validate"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="password"
                                type="password"
                                className="validate"
                                value={password}
                                onChange={handleChangePassword}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action"><Link to="/register">Criar conta</Link>
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action"><Link to="/">Entrar</Link>
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login