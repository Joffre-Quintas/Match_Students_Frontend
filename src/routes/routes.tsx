import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/InitialPage';
import Home from '../pages/Home/Home';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path='/' Component={InitialPage} />
            <Route path='/home' Component={Home} />
        </Routes>    
    )
}
