import React from 'react'
import styles from '../styles/About.module.css'
import {
    BrowserView,
    MobileView
  } from "react-device-detect";

  import AOS from 'aos';
  import 'aos/dist/aos.css';



const About = () => {

    AOS.init({
        duration : 2000
      });

    return (
        <div>
            <BrowserView>
                <div className={styles.overall}>


                    <div className={styles.firstContainer}>

                        <div className={styles.spacer}>
                            <h1 className={styles.titleRight}>Sobre o<br></br>Pega a visão</h1>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.gridContainer}>
                            <p>Uma plataforma que simplifica a busca de atividades extracurriculares dentro e fora da universidade.<br></br>De alunos para alunos.</p>

                        </div>
                    </div>


                    <div className={styles.secondContainer}>
                        <div className={styles.gridContainerSecond}>
                            <p>Quantas vezes, na UFRJ, o aluno teve problemas para encontrar a sua tão sonhada vaga de Iniciação científica, Extensão, Equipes de competição ou até mesmo estágio, no qual este ficou a mercê de emails dos coordenadores ou até mesmo dos anunciantes da vaga?
                                    <br></br>
                                <br></br>Pois bem, nós da CorchoForce, um grupo formado por 6 integrantes, tivemos a ideia de solucionar este problemas e lhe apresentamos a pega a visão.</p> </div>

                        <div className={styles.line}></div>

                        <div className={styles.spacer}>
                            <h1 className={styles.titleLeft}>Por que<br></br>surgimos?</h1>
                        </div>
                    </div>

                    <div className={styles.thirdContainer}>
                        <div className={styles.spacer}>
                            <h1 className={styles.titleRight}>Como usar?</h1>
                        </div>
                        <div className={styles.line}></div>

                        <div className={styles.gridContainerThird}>
                            <p>  Como aluno, navegue pela página inicial procurando pela vaga que mais lhe agrada, podendo usar nosso mecanismo de busca para facilitar a escolha.
                                    <br></br>
                                <br></br>
                                    Como anunciante, faça um simples cadastro e publique suas ofertas de forma simples e rápida.
                                </p>
                        </div>

                    </div>

                    <div className={styles.fourthContainer}>
                        <div className={styles.gridContainerFourth}>

                            <p>Nossa missão é melhorar o contato do aluno com o ofertante da vaga, de modo que não haja atrito entre outras pessoas.</p>

                        </div>
                        <div className={styles.line}></div>

                        <div className={styles.spacer}>
                            <h1 className={styles.titleLeft}>Nossa missão </h1>
                        </div>

                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className={styles.overall}>
                <div className={styles.mobileFirstContainer}>
                        <h1 data-aos="fade-up" className={styles.titleLeft}>Sobre o<br></br>Pega a visão</h1>
                        <div data-aos="fade-up" className={styles.mobileSmallGridCountainer}>Uma plataforma que simplifica a busca de atividades extracurriculares dentro e fora da universidade.<br></br>De alunos para alunos.</div>
                    </div>
                    <div className={styles.mobileSecondContainer}>
                        <h1 data-aos="fade-up" className={styles.titleLeft}>Por que<br></br>surgimos?</h1>
                        <div data-aos="fade-up" className={styles.mobileBiggerGridCountainer}>Quantas vezes, na UFRJ, o aluno teve problemas para encontrar a sua tão sonhada vaga de Iniciação científica, Extensão, Equipes de competição ou até mesmo estágio, no qual este ficou a mercê de emails dos coordenadores ou até mesmo dos anunciantes da vaga?
                                    <br></br>
                                <br></br>Pois bem, nós da CorchoForce, um grupo formado por 6 integrantes, tivemos a ideia de solucionar este problemas e lhe apresentamos a pega a visão.</div>
                    </div>
                    <div className={styles.mobileThirdContainer}>
                        <h1 data-aos="fade-up" className={styles.titleLeft}>Como usar?</h1>
                        <div data-aos="fade-up" className={styles.mobileBiggerGridCountainer}>Como aluno, navegue pela página inicial procurando pela vaga que mais lhe agrada, podendo usar nosso mecanismo de busca para facilitar a escolha.
                                    <br></br>
                                <br></br>
                                    Como anunciante, faça um simples cadastro e publique suas ofertas de forma simples e rápida.</div>
                    </div>
                    <div className={styles.mobileFourthContainer}>
                        <h1 data-aos="fade-up" className={styles.titleLeft}>Nossa missão</h1>
                        <div data-aos="fade-up" className={styles.mobileSmallGridCountainer}>Nossa missão é melhorar o contato do aluno com o ofertante da vaga, de modo que não haja atrito entre outras pessoas.</div>
                    </div>
                </div>

            </MobileView>
        </div>
    )
}

export default About
