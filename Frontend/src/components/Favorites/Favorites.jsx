import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div>
      {myFavorites.map((characters) => {
        return (
          <div>
            <Link to={`/detail/${characters.id}`}>
              <h2>{characters.name}</h2>
            </Link>
            <h3>{characters.species}</h3>
            <h3>{characters.gender}</h3>
            <img src={characters.image} alt="imagenPersonaje" />
          </div>
        );
      })}
    </div>
  );
}
