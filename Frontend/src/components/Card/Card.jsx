import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  //tambien se puede hacer destructuring
  const [isFav, setIsfav] = useState(false);
  
  const myFavorites = useSelector(state=> state.myFavorites);
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
        setIsfav(true);
       }
    });
 }, [myFavorites]);

  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav) {
      setIsfav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsfav(true);
      dispatch(addFavorite(props));
    }
  };

  return (
    <div className={styles.Card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={props.onClose}>X</button>
      <div className={styles.txt}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h3>{props.species}</h3>
        <h3>{props.gender}</h3>
        <img src={props.image} alt="imagenPersonaje" />
      </div>
    </div>
  );
}
