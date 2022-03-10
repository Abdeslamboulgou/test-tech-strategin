import React,{useState} from 'react';
import '../styles/registerForm.css';


const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <h3>Sign up</h3>
            <form className='register-form'>
                
             <div className='email-account'>
                <label id='email'>Email</label>
                <input
                 type="mail"
                 required
                 onChange={ (e) => setEmail(e.target.value)}
                 placeholder = "email *"
                 value={email}
                 />
             </div>
              <div className='password-account'>
              <label id='password'>Mot de passe</label>
               <input
               type="password"
               required
               onChange={ (e) => setPassword(e.target.value)}
               placeholder='********'
               value={password}
               />
               </div>

               <button className='inscription-button'>Inscription</button>
            </form>
            
        </div>
    );
};

export default RegisterForm;