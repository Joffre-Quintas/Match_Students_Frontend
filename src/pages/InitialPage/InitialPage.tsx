import './InitialPage.scss';
import CardUtil from '../../components/CardUtil/CardUtil';
import { Link } from 'react-router-dom';

//Images
import img1 from '../../assets/imgs/initialPage/img1.jpg';

//Icons
import { FaExchangeAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiTeamIdea } from 'react-icons/gi';
import { BiNetworkChart } from 'react-icons/bi';
import { MdOutlineWifiFind } from 'react-icons/md';
import Button from '../../components/Button/Button';

export default function InitialPage(){
    return(
        <div className='initialPage'>
            <section className='firstSection' style={{backgroundImage:`url(${img1})`}}>
                <div className="container">
                    <div className="textField">
                        <h2>
                            Conecte-se... <br />
                            Desenvolva-se....
                        </h2>
                        <p>Descubra um mundo de conexões e desenvolvimento ao seu alcance!</p>
                        <p>Desafiando as demandas de um mercado implacável, criamos um espaço para você conhecer estudantes e trilhar caminhos de crescimento conjunto.</p>    
                        <p>Explore a plataforma e dê asas as suas ideias, colabore, estude e construa um aprendizado em conjunto.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2>Espaço destinado a...</h2>
                    <div className="utils">
                        <CardUtil
                        title='Aprendizado'
                        description='Troca de conhecimento entre os alunos'>
                            <BsFillPersonFill/>
                            <FaExchangeAlt/>
                            <BsFillPersonFill/>
                        </CardUtil>
                        <CardUtil
                        title='Construir novos projetos' 
                        description='Quem sabe uma startup não nasce?'>
                            <GiTeamIdea/>
                        </CardUtil>
                        <CardUtil
                        title='Network' 
                        description='Conheça outros estudantes e profissionais'>
                            <BiNetworkChart/>
                        </CardUtil>
                        <CardUtil
                        title='Conhecer novas áreas' 
                        description='Desbrave outros campos de conhecimento'>
                            <MdOutlineWifiFind/>
                        </CardUtil>
                    </div>
                </div>
            </section>
            <section className='inviteToRegister'>
                <div className="container">
                    <div className="textField">
                        <h2>Cadastre-se</h2>
                        <p>Ainda não fez o cadastro? Não perca mais tempo, rápido e fácil!</p>
                        <Link to={'/registration'}><Button content='Cadastre-se'/></Link>
                    </div>
                    <div className="textField">
                        <h2>Já Possui Cadastro?</h2>
                        <p>Seja bem vindo novamente!</p>
                        <Link to={'/home'}><Button content='Prossiga'/></Link>
                    </div>
                </div>
            </section> 
        </div>
    )
}