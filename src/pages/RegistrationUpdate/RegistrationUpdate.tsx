import { ChangeEvent,useState, FormEvent, useEffect, useContext } from 'react';
import '../Registration/Registration.scss';
import Flag from '../../components/Flag/Flag';
import { URL } from '../../utils/URL';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { createMsgError, removeMsgError, validationInput, validationSubmit } from '../../utils/validations';
import { StudentContext } from '../../context/StudentsContext';

//Type
import IStudent from '../../types/IStudents';

export default function RegistrationUpdate() {
    const { jwt } = useParams();

    const [arrayKnowledge, setArrayKnowledge] = useState<string[]>([])
    const [arrayInterest, setArrayInterest] = useState<string[]>([])
    const [fieldKnowledge, setFieldKnowledge] = useState('')
    const [fieldInterest, setFieldInterest] = useState('')
    const { setListStudents } = useContext(StudentContext);

    const navigate = useNavigate()
    
    
    const [dataForm, setDataForm] = useState<IStudent>({
        completeName: '',
        registrationNumber: '',
        birthday: '',
        phone: '',
        period: 0,
        course: '',
        turn: '',
        isAvailable: true,
        email: '',
        password:'',
        knowledge: [] as string[],
        interest: [] as string[]});

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
        async function getUserData() {
            const response = await fetch(`${URL}/finduserbyjwt/${jwt}`)
            const userData = await response.json()
            setArrayKnowledge(userData.knowledge)
            setArrayInterest(userData.interest)
            setDataForm(await userData)
        }
        getUserData()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handleInputTextChange(e: ChangeEvent<HTMLInputElement>) {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setDataForm(current => {
            return {
                ...current,
                [fieldName]: fieldValue
            }
        })
    }

    function handleInputSelectChange(e:ChangeEvent<HTMLSelectElement>) {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setDataForm(current => {
            return {
                ...current,
                [fieldName]: fieldValue
            }
        })
    }
    
    async function handleSubmitRegistrationForm(e:FormEvent) {
        e.preventDefault()
        setDataForm(current => {
            return {
                ...current,
                interest: arrayInterest,
                knowledge: arrayKnowledge
            }
        })
        if(validationSubmit(dataForm)) {
            try {
                const response = await fetch(`${URL}/registration/update`, {
                    method: 'PUT',
                    headers: {
                        "Content-type": "application/json",
                        "token": jwt as string
                    },
                    body: JSON.stringify(dataForm)
                })
                if (!response.ok) {
                    setListStudents(current => {
                        return{
                            ...current,
                            dataForm
                        }
                    })
                    alert('Ocorreu um erro de servidor, por favor aguarde um pouco e tente novamente mais tarde!')
                    return;
                }
            } catch (error) {
                console.log(error)
                return
            }
            navigate('/home')
        }
        
    }  
    return(
        
        <div className="registrationContainer">
            <h1>Atualizar Cadastro</h1>
            <form className='registrationContainer_registrationForm'>
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <div>
                        <label htmlFor="completeName">Nome Completo</label>
                        <input 
                            type="text"
                            value={dataForm.completeName}
                            name='completeName' 
                            id="completeName" 
                            placeholder="Digite seu nome completo" 
                            onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput('text',e)} 
                            />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email"
                            value={dataForm.email} 
                            name='email' 
                            id="email" 
                            placeholder="exemplo@email.com.br" 
                            onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput('email',e)} 
                            />
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de nascimento</label>
                        <input 
                            type="date"
                            value={dataForm.birthday.slice(0,10)}
                            name='birthday' 
                            id="birthday" 
                            onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput("date",e)}
                            />
                    </div>
                    <div>
                        <label htmlFor="phone">Telefone</label>
                        <input 
                            type="tel"
                            value={dataForm.phone}
                            name='phone' 
                            id="phone" 
                            placeholder="Informe o número com DDD" 
                            onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput('phone',e)}
                            />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password"
                            name='password' 
                            id="password" 
                            placeholder="Digite sua senha" 
                            onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput("password", e)}
                            />
                    </div>
                    <div>
                        <label htmlFor="repassword">Confirme a Senha</label>
                        <input 
                            type="password" 
                            id="repassword" 
                            placeholder="Digite sua senha" 
                            onBlur={(e) => {
                                const fieldValue = e.target.value;
                                fieldValue != dataForm.password ? createMsgError(e, 'Os campos não conferem') : removeMsgError(e)   
                            }}
                            />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Informações acadêmicas</legend>
                    {/* <div>
                        <label htmlFor="registrationNumber">Matrícula</label>
                        <input 
                            type="text" 
                            name='registrationNumber' 
                            id='registrationNumber' onChange={(e) => handleInputTextChange(e)}
                            onBlur={(e) => validationInput("RN", e)}
                            />
                    </div> */}
                    <div>
                        <label htmlFor="course">Curso</label>
                        <select name="course" value={dataForm.course} id="course" onChange={(e) => handleInputSelectChange(e)}>
                            <option value="">-</option>
                            <option value="SI">SI</option>
                        </select>
                    </div>
                    <div className='divInputRadio'>
                        <label>Turno</label>
                        <div>
                            <div>
                                <input type="radio" checked={dataForm.turn == "Manhã" ? true : false} name="turn" id="morning" value='Manhã' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="morning">Manhã</label>
                            </div>
                            <div>
                                <input type="radio" checked={dataForm.turn == "Tarde" ? true : false} name="turn" id="afternoon" value='Tarde'onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="afternoon">Tarde</label>
                            </div>
                            <div>
                                <input type="radio" checked={dataForm.turn == "Noite" ? true : false} name="turn" id="night" value='Noite' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="night">Noite</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="period">Período</label>
                        <select name="period" value={dataForm.period} id="period" onChange={(e) => handleInputSelectChange(e)}>
                            <option value="">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className='divInputRadio'>
                        <label htmlFor="isAvailable">Disponível para mentorar</label>
                        <div>
                            <div>
                                <input type="radio" checked={dataForm.isAvailable ? true: false} name="isAvailable" id="true" value='true' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="true">Sim</label>
                            </div>
                            <div>
                                <input type="radio" checked={dataForm.isAvailable ? false: true} name="isAvailable" id="false" value='off' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="false">Não</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="knowledge">Conhecimentos</label>
                        <div>
                            <AiOutlinePlusSquare onClick={() => fieldKnowledge != '' ? setArrayKnowledge(current => [...current, fieldKnowledge]): null}/>
                            <input type="text" name="knowledge" id="knowledge" placeholder='Informe os assuntos que você domina' onChange={(e:ChangeEvent<HTMLInputElement>) => setFieldKnowledge(e.target.value)}/>
                        </div>
                    </div>
                    <div className='displayArray knowledge'>
                        {arrayKnowledge && arrayKnowledge.map( (knowledge,index) => <Flag key={index} content={knowledge} state={[arrayKnowledge, setArrayKnowledge]}/>)}
                    </div>
                    <div>
                        <label htmlFor="interest">Interesses</label>
                        <div>
                            <AiOutlinePlusSquare onClick={() => fieldInterest != '' ? setArrayInterest(current => [...current, fieldInterest]): null}/>
                            <input type="text" name="interest" id="interest" placeholder='Informe os assuntos que você domina' onChange={(e:ChangeEvent<HTMLInputElement>) => setFieldInterest(e.target.value)}/>
                        </div>
                    </div>
                    <div className='displayArray interest'>
                        {arrayInterest && arrayInterest.map( (interest,index) => <Flag key={index} content={interest} state={[arrayInterest, setArrayInterest]}/>)}
                    </div>
                    
                </fieldset>
                <button onClick={(e) => handleSubmitRegistrationForm(e)}>Atualizar</button>
            </form>      
        </div>
    )
}