import { RiAccountCircleLine } from 'react-icons/ri';
import './Header.scss';

export default function Header() {
    return(
        <header className='header'>          
            <div className="container">
                <div className='header_logo'>
                    <h1>LOGO</h1>
                </div>
                <div className='header_loginSection'>
                    <h6>Faça Login</h6>
                    <RiAccountCircleLine/>
                </div>
            </div>           
        </header>
    )
}