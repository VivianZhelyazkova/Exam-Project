import amulet from "../assets/homeBackground.png"

export default function Home() {
   return (
     <div  className={"home-background-amulet"} style={{backgroundImage:`url(${amulet})`}}>
     <h1>Home</h1>
     </div>
   );
}