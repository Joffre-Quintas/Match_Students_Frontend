import Button from '../../components/Button/Button';
import './Login.scss';

export default function Login() {
    async function handleLogin(e:SubmitEvent) {
        e.preventDefault()
        console.log('teste')
    }
    return(
        <div className='loginContainer'>
                <h1>Login</h1>
            <form className='loginContainer_formLogin' onSubmit={(e) => handleLogin(e) }>
                <div>
                    <label htmlFor="user">E-mail</label>
                    <input type="email" name='email' id='user' placeholder='exemplo@email.com.br'/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' id='password' placeholder='Digite sua senha'/>
                </div>
                <Button content='Entrar' type='submit'/>
                <p>Ainda não possui cadastro? <a href="" style={{textDecoration:'underline'}}>Cadastre-se</a></p>
            </form>
        </div>
    )
}