
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Header.scss';
import { BiLogOut } from 'react-icons/bi';
import { RxUpdate } from 'react-icons/rx';
import { FiAlertTriangle } from 'react-icons/fi';

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('conectaAlunosUser');
    if (storedUser) {
        const dataUserLogged = JSON.parse(storedUser);
        setUser(dataUserLogged.completeName); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleOpenAndCloseMenu() {
    setOpen(current => !current)
  }

  function logout() {
    localStorage.removeItem('conectaAlunosUser')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setUser(null!)
    setOpen(false)
    navigate('/')
  }

  return (
    <header className='header'>
      <div className="container">
        <div className='header_logo'>
          <Link to={'/'}>
            <h1>LOGO</h1>
          </Link>
        </div>
        {user == null ?
        (<Link to={'/login'} className='header_loginSection'>
          <h6>Fazer login</h6>
          <RiAccountCircleLine />
        </Link>)
        :
        (<div className='loged'>
          <h6>{String(user)}</h6>
          <div className='menuHamburguer' onClick={handleOpenAndCloseMenu}>
            <span className={open ? 'piece1' : ''}></span>
            <span className={open ? 'piece2' : ''}></span>
            <span className={open ? 'piece3' : ''}></span>
          </div> 
          <div className={open ? 'navbar menuOpen' : 'navbar'}>  
                  
            <span>
              <p>Atualizar Cadastro</p>
              <RxUpdate/>
            </span>
            <span>
              <p>Report Bug</p>
              <FiAlertTriangle/>
            </span>
            <span onClick={logout}>
              <p>Sair</p>
              <BiLogOut/>
            </span>
          </div>
        </div>)
        }
        
      </div>
    </header>
  );
}
