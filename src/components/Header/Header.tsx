import { RiAccountCircleLine } from 'react-icons/ri';
import './Header.scss';

export default function Header() {
    return(
        <header className='header'>          
            <div className="container">
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className='header_loginSection'>
                    <p>Faça Login</p>
                    <RiAccountCircleLine/>
                </div>
            </div>           
        </header>
    )
}