import React,{useState} from 'react';

const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <form className='register-form'>
             <div className='email-account'>
                <label>Invalid Email</label>
                <input
                 type="mail"
                 required
                 onChange={ (e) => setEmail(e.target.value)}
                 placeholder = "email *"
                 value={email}
                 />
             </div>
              <div className='password-account'>
               <input
               type="password"
               required
               onChange={ (e) => setPassword(e.target.value)}
               placeholder='********'
               value={password}
               />
               </div>
            </form>
            <button>Inscription</button>
        </div>
    );
};

export default RegisterForm;