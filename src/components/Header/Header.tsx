
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Header.scss';

export default function Header() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('conectaAlunosUser');
    if (storedUser) {
        const dataUserLogged = JSON.parse(storedUser);
        setUser(dataUserLogged.completeName); 
    }
  }, []);

  return (
    <header className='header'>
      <div className="container">
        <div className='header_logo'>
          <Link to={'/'}>
            <h1>LOGO</h1>
          </Link>
        </div>
        <Link to={'/login'} className='header_loginSection'>
          <h6>{typeof user === 'string' ? user : 'Fazer login'}</h6>
          <RiAccountCircleLine />
        </Link>
      </div>
    </header>
  );
}
