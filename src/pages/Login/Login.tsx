import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../components/Button/Button';
import './Login.scss';

export default function Login() {
    const [formLogin, setFormLogin ] = useState({})

    function handleInputChange(e:ChangeEvent<HTMLInputElement>) {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;

        setFormLogin(() => {
            return {
                ...formLogin,
                [fieldName]: fieldValue
            }
        })
    }
    
    async function handleLogin(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await fetch('https://match-students-api.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(formLogin)
        })
        console.log(await response.json())
    }
    return(
        <div className='loginContainer'>
                <h1>Login</h1>
            <form className='loginContainer_formLogin' onSubmit={(e) => handleLogin(e) }>
                <div>
                    <label htmlFor="user">E-mail</label>
                    <input type="email" name='email' id='user' placeholder='exemplo@email.com.br' onChange={(e) => handleInputChange(e)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' id='password' placeholder='Digite sua senha' onChange={(e) => handleInputChange(e)}/>
                </div>
                <Button content='Entrar' type='submit'/>
                <p>Ainda não possui cadastro? <a href="" style={{textDecoration:'underline'}}>Cadastre-se</a></p>
            </form>
        </div>
    )
}