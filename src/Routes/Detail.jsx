import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import Card from "../Components/Card";
import {ContextGlobal} from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
const Detail = () => {
  const { id } = useParams();
  const {state} = useContext(ContextGlobal);
  
  const dentist = state.dentists.find(d => d.id.toString() === id);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  return (
      <Card id={dentist.id} username={dentist.username} name={dentist.name} email={dentist.email} phone={dentist.phone} website={dentist.website} />
  )

      

}

export default Detail