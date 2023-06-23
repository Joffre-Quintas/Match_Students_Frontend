import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/InitialPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PrivateRoute from '../middlewares/PrivateRoute';


export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
            
        </Routes>
    );
}
