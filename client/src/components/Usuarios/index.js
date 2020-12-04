import React, { useState, useEffect } from 'react'
import './style.css'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('/api/usuarios')
      .then(res => res.json())
      .then(json => setUsuarios(json))
      .catch(err => console.error(err))
  }, [])

  return (
    <section>
      <h2>Usuários</h2>
      <ul>
        {usuarios.map(usuario => <li key={usuario.id}>#{usuario.id} | {usuario.nome} {usuario.sobrenome}</li>)}
      </ul>
    </section>
  )
}

export default Usuarios