import { AiOutlineCheckCircle } from 'react-icons/ai';
import './Registrationok.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationOk() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },3000)
    },[]) 
    return (
        <div className='registrationOk'>
            <h1>Cadastro Realizado!</h1>
            <AiOutlineCheckCircle/>
        </div>
    )
}