import { ChangeEvent, KeyboardEvent, useState, FormEvent } from 'react';
import './Registration.scss';
import Flag from '../../components/Flag/Flag';
import { URL } from '../../utils/URL';

export default function Registration() {
    const [arrayKnowledge, setArrayKnowledge] = useState<string[]>([])
    const [arrayInterest, setArrayInterest] = useState<string[]>([])
    const [formData, setDataForm] = useState({knowledge: [] as string[], interest: [] as string[]});
    function handleInputTextChange(e: ChangeEvent<HTMLInputElement>) {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setDataForm(() => {
            return {
                ...formData,
                [fieldName]: fieldValue
            }
        })
    }
    function handleInputSelectChange(e:ChangeEvent<HTMLSelectElement>) {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        setDataForm(() => {
            return {
                ...formData,
                [fieldName]: fieldValue
            }
        })
    }
    function handleFieldArraysForm(e: KeyboardEvent<HTMLInputElement>) {
        const fieldName = e.currentTarget.name; 
        const fieldValue = e.currentTarget.value;
        if(e.key === 'Enter') {
            if(fieldName == 'knowledge') {
                setArrayKnowledge(() => [...arrayKnowledge, fieldValue])
                e.currentTarget.value = '';
            } else if(fieldName == 'interest') {
                setArrayInterest(() => [...arrayInterest, fieldValue ])
                e.currentTarget.value = '';
            }
        } 
    }
    function handleSubmitRegistrationForm(e:FormEvent) {
        e.preventDefault()
        setDataForm(() => {
            return {
                ...formData,
                interest: arrayInterest,
                knowledge: arrayKnowledge
            }
        })
        try {
            fetch(`${URL}/registration`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then(() => console.log('ok'))            
        } catch (error) {
            console.log(error)
        }
    }  
    return(
        <div className="registrationContainer">
            <h1>Cadastre-se</h1>
            <form className='registrationContainer_registrationForm'>
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <div>
                        <label htmlFor="completeName">Nome Completo</label>
                        <input type="text" name='completeName' id="completeName" placeholder="Digite seu nome completo" onChange={(e) => handleInputTextChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' id="email" placeholder="exemplo@email.com.br" onChange={(e) => handleInputTextChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="reemail">Confirme seu E-mail</label>
                        <input type="email" id="reemail" placeholder="Este será seu login" />
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de nascimento</label>
                        <input type="date" name='birthday' id="birthday" onChange={(e) => handleInputTextChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefone</label>
                        <input type="tel" name='phone' id="phone" placeholder="Informe o número com DDD" onChange={(e) => handleInputTextChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name='password' id="password" placeholder="Digite sua senha" onChange={(e) => handleInputTextChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="repassword">Confirme a Senha</label>
                        <input type="password" id="repassword" placeholder="Digite sua senha" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Informações acadêmicas</legend>
                    <div>
                        <label htmlFor="registrationNumber">Matrícula</label>
                        <input type="text" name='registrationNumber' id='registrationNumber' onChange={(e) => handleInputTextChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="course">Curso</label>
                        <select name="course" id="course" onChange={(e) => handleInputSelectChange(e)}>
                            <option value="">-</option>
                            <option value="SI">SI</option>
                        </select>
                    </div>
                    <div className='divInputRadio'>
                        <label>Turno</label>
                        <div>
                            <div>
                                <input type="radio" name="turn" id="morning" value='Manhã' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="morning">Manhã</label>
                            </div>
                            <div>
                                <input type="radio" name="turn" id="afternoon" value='Tarde'onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="afternoon">Tarde</label>
                            </div>
                            <div>
                                <input type="radio" name="turn" id="night" value='Noite' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="night">Noite</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="period">Período</label>
                        <select name="period" id="period" onChange={(e) => handleInputSelectChange(e)}>
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
                                <input type="radio" name="isAvailable" id="true" value='true' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="true">Sim</label>
                            </div>
                            <div>
                                <input type="radio" name="isAvailable" id="false" value='off' onChange={(e) => handleInputTextChange(e)}/>
                                <label htmlFor="false">Não</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="knowledge">Conhecimentos</label>
                        <input type="text" name="knowledge" id="knowledge" placeholder='Informe os assuntos que você domina' onKeyDown={(e) => handleFieldArraysForm(e)}/>
                    </div>
                    <div className='displayArray knowledge'>
                        {arrayKnowledge && arrayKnowledge.map( (knowledge,index) => <Flag key={index} content={knowledge} state={[arrayKnowledge, setArrayKnowledge]}/>)}
                    </div>
                    <div>
                        <label htmlFor="interest">Interesses</label>
                        <input type="text" name="interest" id="interest" placeholder='Informe as áreas de interesse' onKeyDown={(e) => handleFieldArraysForm(e)}/>
                    </div>
                    <div className='displayArray interest'>
                        {arrayInterest && arrayInterest.map( (interest,index) => <Flag key={index} content={interest} state={[arrayInterest, setArrayInterest]}/>)}        
                    </div>
                </fieldset>
                <button onClick={(e) => handleSubmitRegistrationForm(e)}>Cadastrar</button>
            </form>      
        </div>
    )
}