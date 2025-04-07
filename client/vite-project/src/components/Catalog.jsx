import { useFetchMonsters } from "../api/monstersApi";

export default function Catalog() {
    const {monsters} = useFetchMonsters()
    console.log(monsters);
    
   return (
     <>
     <h1>Catalog</h1>
     </>
   );
}