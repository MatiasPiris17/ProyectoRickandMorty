import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  console.log(detailId);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <div className={styles.detail}>
        <div className={styles.txt}>
          <h1 className={styles.h1}>Nombre: {character?.name}</h1>
          <h2>Status: {character?.status}</h2>
          <h2>Gender: {character?.gender}</h2>
          <h2>Oringe: {character.origin?.name}</h2>
        </div>
        <img src={character.image} alt="ImagenPersonaje" />
      </div>
    </div>
  );
}
