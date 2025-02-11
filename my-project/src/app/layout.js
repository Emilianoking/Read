import React from "react";
import "@/styles/Navbar.module.css"
import Navbar from "./componets/Navbar";

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        <header>
          {/* Importar el Navbar */}
          <Navbar></Navbar>
        </header>

      <main>
        {children}
      </main>

      {/* Footer */}

      <footer>
      <p>© 2025 - Todos los derechos reservados</p>
      </footer>

      
      </body>
    </html>
  )
}