import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {ContextGlobal} from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)
  return (
    <>
    <nav className={state.theme === "light" ? "bg-dark" : "bg-light"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contáctanos</Link>
      <Link to={"/favs"}>Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: 'SWITCH_THEME' })}>Tema {state.theme === 'light' ? 'Oscuro' : 'Claro'}</button>
    </nav>
    </>
  )
}

export default Navbar