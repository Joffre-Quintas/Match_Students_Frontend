import Button from '../../components/Button/Button';
import './Registration.scss';

export default function Registration() {
    return(
        <div className="registrationContainer">
            <h1>Cadastre-se</h1>
            <form className='registrationContainer_registrationForm'>
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <div>
                        <label htmlFor="completeName">Nome Completo</label>
                        <input type="text" id="completeName" placeholder="Digite seu nome completo"/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="exemplo@email.com.br"/>
                    </div>
                    <div>
                        <label htmlFor="reemail">Confirme seu E-mail</label>
                        <input type="email" id="reemail" placeholder="Este será seu login"/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de nascimento</label>
                        <input type="date" id="birthday"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefone</label>
                        <input type="tel" id="phone" placeholder="Informe o número com DDD"/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Digite sua senha"/>
                    </div>
                    <div>
                        <label htmlFor="repassword">Confirme a Senha</label>
                        <input type="password" id="repassword" placeholder="Digite sua senha"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Informações acadêmicas</legend>
                    <div>
                        <label htmlFor="cra">CRA</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="course">Curso</label>
                        <select name="course" id="course">
                            <option value="SI">SI</option>
                        </select>
                    </div>
                    <div className='divInputRadio'>
                        <label>Turno</label>
                        <div>
                            <div>
                                <input type="radio" name="turn" id="morning" />
                                <label htmlFor="morning">Manhã</label>
                            </div>
                            <div>
                                <input type="radio" name="turn" id="afternoon" />
                                <label htmlFor="afternoon">Tarde</label>
                            </div>
                            <div>
                                <input type="radio" name="turn" id="morning" />
                                <label htmlFor="night">Noite</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="period">Período</label>
                        <select name="period" id="period">
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
                                <input type="radio" name="isAvailable" id="true" />
                                <label htmlFor="true">Sim</label>
                            </div>
                            <div>
                                <input type="radio" name="isAvailable" id="false" />
                                <label htmlFor="false">Não</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="knowledge">Conhecimentos</label>
                        <input type="text" name="knowledge" id="knowledge" placeholder='Informe os assuntos que você domina'/>
                    </div>
                    <div>
                        <label htmlFor="interest">Interesses</label>
                        <input type="text" name="interest" id="interest" placeholder='Informe as áreas de interesse'/>
                    </div>
                </fieldset>
                <Button content='Cadastrar' type='submit'/>  
            </form>      
        </div>
    )
}