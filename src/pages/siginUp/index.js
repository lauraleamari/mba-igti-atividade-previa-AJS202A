import React, {useState, ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    return (
        <div id="page-register">
            <Navbar />
            <div className="row">
                <form className="col s12">
                    <fieldset>
                        <legend>
                            <h2>Cadastro</h2>
                        </legend>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Nome"
                                    id="name"
                                    type="text"
                                    className="validate"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="name"></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="email"
                                    type="email"
                                    className="validate"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="email-confirm"
                                    type="email"
                                    className="validate"
                                />
                                <label htmlFor="email-confirm">Confirm Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="password-confirm"
                                    type="password"
                                    className="validate"
                                />
                                <label htmlFor="password-confirm">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button
                                    className="btn waves-effect waves-light"
                                    type="submit"
                                    name="action"
                                >
                                    <Link to="/list">Enviar</Link>
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>
    )
}

export default Register;