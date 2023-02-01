import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  //tambien se puede hacer destructuring
  return (
    <div className={styles.Card}>
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
