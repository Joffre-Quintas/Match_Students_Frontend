import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

export default function PrivatePage({ children }: {children: JSX.Element}) {
    const navigate = useNavigate();

    function tokenExist() {
        const storageUser = localStorage.getItem('conectaAlunosUser');
        return storageUser ? true : false;
    }
  
    useEffect(() => {
        if (!tokenExist()) {
            navigate('/login');
        }
    }, []);
  
    return (<>{children}</>);
}
