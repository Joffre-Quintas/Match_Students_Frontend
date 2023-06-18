import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/InitialPage';


export default function AppRoutes() {
    return(
        <Routes>
            <Route path='/' Component={InitialPage} />
        </Routes>    
    )
}
