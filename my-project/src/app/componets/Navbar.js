import Link from 'next/link'
import React from 'react'
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
  return (
    // Etiqueta nav
    <nav className={styles.navbar}>
        <ul>
            <li><Link href='/'>Inicio</Link></li>
            <li><Link href='/about'>Sobre Nosotros</Link></li>
            <li><Link href='/contact'>Contacto</Link></li> 
        </ul>
    </nav>
  )
}
