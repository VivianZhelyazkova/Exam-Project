import { useNavigate } from "react-router";
import { usePostMonster } from "../api/monstersApi";
import useAuth from "../hooks/useAuth";

export default function AddMonster() {
    const navigate = useNavigate()
    const {postMonster} = usePostMonster()
    const {name} = useAuth()
    async function onSubmitAddMonster(formData) {
        const monster = Object.fromEntries(formData)
        await postMonster({...monster, author:name})
        navigate("/monsters")
    }
    return (
        <>
            <h1>Add Monster</h1>
            <form className={"column form-card"} action={onSubmitAddMonster}>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="image">Photo</label>
                    </div>
                    <input className="form-input" type="text" name="image" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input className="form-input" type="text" name="name" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="powers">Powers</label>
                    </div>
                    <textarea className="form-input" name="powers" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="weaknesses">Weaknesses</label>
                    </div>
                    <textarea className="form-input" name="weaknesses" />
                </div>
                <button className="form-button" type="submit">
                    CREATE
                </button>
            </form>
        </>
    );
}
