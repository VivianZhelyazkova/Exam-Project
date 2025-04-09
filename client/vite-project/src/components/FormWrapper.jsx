
import thorns1 from "../assets/thorns1.png"
export default function FormWrapper({children}) {
   return (
     <div className="form-wrapper">
        <img className="form-left-image" src={thorns1} alt="" />
        <img className="form-right-image" src={thorns1} alt="" />
        {children}
     </div>
   );
}