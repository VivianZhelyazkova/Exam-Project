import { useParams } from "react-router";
import { useFetchMonsterDetails } from "../api/monstersApi";

export default function MonsterDetails() {
    const {id} = useParams()
    const {monsterDetails} = useFetchMonsterDetails(id)
    
    
   return (
     <>
        <h1>{monsterDetails.name}</h1>
        <div>
            <img src={monsterDetails.image} alt={monsterDetails.name} />

            <div>
                <p>{monsterDetails.powers}</p>
                <p>{monsterDetails.weaknesses}</p>
                <p>{monsterDetails.author}</p>
                
            </div>
        </div>

     </>
   );
}