import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ContextGlobal} from "./utils/global.context";

    // Aqui iria la logica para agregar la Card en el localStorage
  const Card = ({ name, username, id, email, phone, website }) => {
    const { state, dispatch } = useContext(ContextGlobal);
    const fav = state.favs.some((d) => d.id === id)
    const handleFavorites = () => {
      console.log("clicked");
      fav ? dispatch({type: "REMOVE_FAVORITE", payload: id}) : dispatch({type: "ADD_FAVORITE", payload: {name, username, id, email, phone, website}});
      };

    return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {name && <p>{name}</p>}
        {username && <p>{username}</p>}
        {id && <p>{id}</p>}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {email && <p>{email}</p>}
        {phone && <p>{phone}</p>}
        {website && <p>{website}</p>}
        <Link to={`/dentist/${id}`}>Detalles</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleFavorites} className={fav ? "is-fav-btn" : "favButton"}>
          {fav ? "Remover a favoritos" : "Agregar a favoritos"}
        </button>
    </div>
  );
};

export default Card;
