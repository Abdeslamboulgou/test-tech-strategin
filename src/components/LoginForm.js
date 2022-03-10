import React, { useState } from 'react';
import '../styles/loginForm.css';
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h3>Login</h3>
            <form className='register-form'>
                
                <div className='email-account'>
                    <label id='email'>Email</label>
                    <input
                        type="mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email *"
                        value={email}
                    />
                </div>
                <div className='password-account'>
                    <label id='password'>Mot de passe</label>
                    <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='********'
                        value={password}
                    />
                </div>
                <span id='buttons'>
                    <button className='connexion-button'>Connexion</button>
                    <Link style={{ textDecoration: 'none', color:'black' }} to="/register"><button className='inscription-button'>Inscription</button></Link>
                </span>
            </form>
        </div>
    );
};

export default LoginForm;