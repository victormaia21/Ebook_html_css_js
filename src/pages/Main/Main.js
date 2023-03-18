import React from 'react'
import Ebook from './Ebook/Ebook'
import styles from './Main.module.css'
import Guia_image from './Guia_image/Guia_image'
import Formulario from './Formulario/Formulario'
import Sections from './Sections/Sections'
const Main = () => {
  return (
    <main className={styles.main}>
        <Ebook/>
        <Guia_image/>
        <Formulario/>
        <Sections/>
    </main>
  )
}

export default Main