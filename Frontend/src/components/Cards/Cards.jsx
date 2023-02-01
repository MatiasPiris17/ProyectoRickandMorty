import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;

   return (
   <div className={styles.Cards}>{
      characters.map((data)=>{
         return <Card
         id={data.id}
         name={data.name}
         species={data.species}
         gender={data.gender}
         image={data.image}
         onClose={()=>props.onClose(data.id)}
         />
      })
      }
   </div> // data
   )
}
