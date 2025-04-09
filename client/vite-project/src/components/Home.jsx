import amulet from "../assets/homeBackground.png"
import name from "../assets/name3.png"
export default function Home() {
   return (
     <div  className={"home-background-amulet"} style={{backgroundImage:`url(${amulet})`}}>
     {/* <h1>Home</h1> */}
     <img src={name} alt="" className="home-name-image" />
     </div>
   );
}