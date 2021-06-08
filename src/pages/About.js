import React from 'react'
import styles from '../styles/About.module.css'
import {
    BrowserView,
    MobileView
  } from "react-device-detect";

const About = () => {
    return (
        <div>
            <BrowserView>
            <div className={styles.aboutContainer}>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>Sobre <br></br>Pega a visão</h1>
                </div>
                <div className={styles.line}></div>
                <div className={styles.gridContainer}>
                    <div className={styles.aboutContent}>
                        <p>Quantas vezes, na UFRJ, o aluno teve problemas para encontrar a sua tão sonhada vaga de Iniciação científica, Extensão, Equipes de competição ou até mesmo estágio, no qual este ficou a mercê de emails dos coordenadores ou até mesmo dos anunciantes da vaga?</p>
                        <p>Pois bem, nós da CorchoForce, um grupo formado por 6 integrantes, teve a ideia de solucionar este problemas e lhe apresentamos a pega a visão.</p>
                        <p>Nosso objetivo é melhorar o contato do aluno com o ofertante da vaga, de modo que não haja atrito entre outras pessoas.</p>
                        <p>Pega a visão é um projeto desenvolvido que consiste em organizar todas as ofertas (estágio, Iniciação científica, extensão, etc) e dispor aos alunos, de modo que estes possam aplicar pela própria plataforma <i>(eventualmente)</i>, além de receber notificações pelo seu e-mail quando aparecer uma nova oportunidade.</p>
                        <p>A ideia se baseou em conversas que tivemos com 10 pessoas que já fizeram iniciação científica e ambos apresentaram descontentamentos na forma de divulgação das vagas e decidimos ampliar para todas as vagas possíveis. </p>
                    </div>
                </div>
            </div>
            </BrowserView>
            <MobileView>

            </MobileView>
        </div>
    )
}

export default About
