import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/InitialPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PrivateRoute from '../middlewares/PrivateRoute';
import Registration from '../pages/Registration/Registration';
import RegistrationOk from '../pages/RegistrationOk/RegistrationOk';
import RegistrationUpdate from  '../pages/RegistrationUpdate/RegistrationUpdate';

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration/registrationok" element={<RegistrationOk />} />
            <Route path="/registration/update/:jwt" element={<PrivateRoute><RegistrationUpdate/></PrivateRoute>}/>
            <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />      
        </Routes>
    );
}
