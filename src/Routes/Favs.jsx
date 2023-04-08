import Card from "../Components/Card";
import {ContextGlobal} from "../Components/utils/global.context";
import React, { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs && state.favs.map(d => <Card key={d.id} name={d.name} username={d.username} id={d.id} fav={true}/>)}
      </div>
    </>
  );
};

export default Favs;
