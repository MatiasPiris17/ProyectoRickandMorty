import { useState } from "react";

export default function SearchBar(props) {
   const [characters, setCharacters] = useState("");

    function handleInputChange(event) {
      setCharacters (event.target.value)
    }

   return (
      <div>
         <input type='text'name='search' placeholder="Personaje..." onChange={(e)=> handleInputChange(e)} value={characters} />
         <button onClick={()=> props.onSearch(characters)}>Agregar</button> 
      </div>
   );
}
