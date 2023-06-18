import './InitialPage.scss';

//Images
import img1 from '../../assets/imgs/initialPage/img1.png';
import img2 from '../../assets/imgs/initialPage/img2.png';
import img3 from '../../assets/imgs/initialPage/img3.png';


export default function InitialPage(){
    return(
        <>
            <section>
                <div className="container">
                    <div className='textField'>
                        <h2>
                            Conecte-se...<br />
                            Desenvolva-se....
                        </h2>
                        <p>
                            Descubra um mundo de conexões e desenvolvimento ao seu alcance!Desafiando as demandas de um mercado implacável, criamos um espaço para você conhecer estudantes e trilhar caminhos de crescimento conjunto. 
                        </p>   
                        <p>
                            Explore a plataforma e dê asas às suas ideias, colabore, estude e construa um aprendizado em conjunto.
                        </p>
                    </div>
                    <div className='imgField'>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='textField'>
                        <h2>Cadê o monitor??</h2>
                        <p>
                            Estudantes inquietos tendem a questionar... <br />
                            Então para quem devemos perguntar?
                        </p>
                        <p>
                            Pensando nisso, decidimos colocar frente a frente quem tem mais experiência com aquele que tem menos. 
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='textField'>
                        <h2>Cadastre-se</h2>
                        <p>Rápido e fácil, ta esperando o que?</p>
                        <button>Cadastre-se</button>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}