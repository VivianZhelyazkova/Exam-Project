import { useNavigate, useParams } from "react-router";
import { useFetchMonsterDetails, usePutMonster } from "../api/monstersApi";
import { useEffect, useState } from "react";
import ErrorModal from "./ErrorModal";

export default function EditMonster() {
    const { id } = useParams();
    const { monsterDetails } = useFetchMonsterDetails(id);
    const { putMonster } = usePutMonster();
    const navigate = useNavigate();
    const [monster, setMonster] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setMonster(monsterDetails);
    }, [monsterDetails]);

    async function onSubmitEditMonster() {
        if (
            !monster.name ||
            !monster.powers ||
            !monster.weaknesses ||
            !monster.image
        ) {
            setErrorMessage("All fields are required!");
            return;
        }
        try {
            await putMonster(id, monster);
            navigate(`/monster/${id}`);
        } catch (err) {
            setErrorMessage(err.message);
        }
    }

    function onChangeHandler(value, propName) {
        setMonster((prev) => {
            return { ...prev, [propName]: value };
        });
    }

    return (
        <>
            {errorMessage && (
                <ErrorModal
                    message={errorMessage}
                    onClose={() => {
                        setErrorMessage("");
                    }}
                />
            )}
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
                        value={monster.image || ""}
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
                        value={monster.name || ""}
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
                        value={monster.powers || ""}
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
                        value={monster.weaknesses || ""}
                        onChange={(e) => {
                            onChangeHandler(e.target.value, e.target.name);
                        }}
                    />
                </div>
                <div className="modal-buttons-container">
                    <button className="form-button" type="submit">
                        SUBMIT
                    </button>
                    <button
                        className="form-button"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}
