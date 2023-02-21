import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards,filterCards } from "../../redux/actions";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch()

  const handlerOrder = (event)=> {
    dispatch(orderCards(event.target.value))
  }
  const handlerFilter = (event)=> {
    dispatch(filterCards(event.target.value))
  }
  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select  onChange={handlerFilter}>
          <option value="filter" disabled='disabled'>Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
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
