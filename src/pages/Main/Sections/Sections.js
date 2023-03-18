import React from 'react'
import styles from './Sections.module.css'
import computador from '../../../imagens/pagina-html-do-zero.png'
import html from '../../../imagens/de-seus-primeiros-passos-com-HTML.png'
import css from '../../../imagens/de-identidade-a-sua-pagina-com-css.png'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div className={styles.sections}>
        <section className={styles.section_}>
            <img src={computador} alt="computador mostrando informações" />
            <article>
                <h3>Crie uma página<br />Web do ZERO</h3>
                <p>Sem precisar de conhecimento prévio. aprenda a contruir uma pagina Web exatamente 
                    <Link>Igual a essa</Link>!</p>
            </article>
        </section>

        <section className={styles.section_}>
            <img src={html} alt="html simbolo" />
            <article>
                <h3>Dê seus primeiros<br />passos com HTML</h3>
                <p>Conheça a estrutura de um documento <strong>HTML</strong> na prática,
                <br />além de conhecer diversas tags e suas funções.</p>
            </article>
        </section>
        
        <section className={styles.section_}>
            <img src={css} alt="css simbolo" />
            <article>
                <h3>Dê indentidade a sua<br />pagina com CSS</h3>
                <p>Ao longo do ebook, aprenda a utilizar o CSS para <br /> 
                formatar o seu projeto, proporcionando uma identidade <br /> 
                própria para sua página!</p>
            </article>
        </section>
    </div>
  )
}

export default Sections