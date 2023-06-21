import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/InitialPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path='/' Component={InitialPage} />
            <Route path='/login' Component={Login} />
            <Route path='/home' Component={Home} />
        </Routes>    
    )
}
