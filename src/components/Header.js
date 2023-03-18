import React from 'react'
import styles from './Header.module.css'
import imgTopo from '../imagens/header.png'
const NavBar = () => {
  return (
    <header className={styles.header}>
      <img src={imgTopo} alt="topo" />
    </header>
  )
}

export default NavBar