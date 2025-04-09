import { useNavigate, useParams } from "react-router";
import { useFetchMonsterDetails, usePutMonster } from "../api/monstersApi";
import { useEffect, useState } from "react";

export default function EditMonster() {
    const { id } = useParams();
    const { monsterDetails } = useFetchMonsterDetails(id);
    const { putMonster } = usePutMonster();
    const navigate = useNavigate();
    const [monster, setMonster] = useState({});
    useEffect(() => {
        setMonster(monsterDetails);
    }, [monsterDetails]);
    async function onSubmitEditMonster(formData) {
        const monsterNewDetails = Object.fromEntries(formData);
        await putMonster(id, monsterNewDetails);
        navigate(`/monster/${id}`);
    }
    function onChangeHandler(value, propName) {
        setMonster((prev) => {
            return { ...prev, [propName]: value };
        });
    }
    return (
        <>
            <h1>Edit Monster</h1>
            <form className={"column form-card"} action={onSubmitEditMonster}>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="image">Photo</label>
                    </div>
                    <input
                        className="form-input"
                        type="text"
                        name="image"
                        value={monster.image||""}
                        onChange={(e) => {
                            onChangeHandler(e.target.value, e.target.name);
                        }}
                    />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input
                        className="form-input"
                        type="text"
                        name={"name"}
                        value={monster.name||""}
                        onChange={(e) => {
                            onChangeHandler(e.target.value, e.target.name);
                        }}
                    />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="powers">Powers</label>
                    </div>
                    <textarea
                        className="form-input"
                        name="powers"
                        value={monster.powers||""}
                        onChange={(e) => {
                            onChangeHandler(e.target.value, e.target.name);
                        }}
                    />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="weaknesses">Weaknesses</label>
                    </div>
                    <textarea
                        className="form-input"
                        name="weaknesses"
                        value={monster.weaknesses||""}
                        onChange={(e) => {
                            onChangeHandler(e.target.value, e.target.name);
                        }}
                    />
                </div>
                <button className="form-button" type="submit">
                    SUBMIT
                </button>
            </form>
        </>
    );
}
