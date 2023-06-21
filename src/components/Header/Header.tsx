import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {

    return(
        <header className='header'>          
            <div className="container">
                <div className='header_logo'>
                    <Link to={'/'}>
                        <h1>LOGO</h1>
                    </Link>
                </div>
                <Link to={'/login'} className='header_loginSection'>
                    <h6>Faça login</h6>
                    <RiAccountCircleLine/>
                </Link>
            </div>           
        </header>
    )
}