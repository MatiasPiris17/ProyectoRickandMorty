import { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const exit = characters.find((e) => e.id === data.id);
          if (exit) {
            alert("ese personaje ya exite");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters((data) => {
      //'data' es character
      return data.filter((item) => item.id !== id);
    });
  };

  return (
    <div className={styles.App}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
