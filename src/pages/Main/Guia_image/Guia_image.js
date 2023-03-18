import React from 'react'
import styles from './Guia_image.module.css'
import Guia from '../../../imagens/guia-do-html-e-css.png'

const Guia_image = () => {
  return (
    <div className={styles.image}>
        <img src={Guia} alt="imagem guia do html e css" />
    </div>
  )
}

export default Guia_image