import { useNavigate, useParams } from "react-router";
import { useDeleteMonster, useFetchMonsterDetails } from "../api/monstersApi";
import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function MonsterDetails() {
    const { id } = useParams();
    const { monsterDetails } = useFetchMonsterDetails(id);
    const { deleteMonster } = useDeleteMonster();
    const navigate = useNavigate();
    const {userId} = useAuth()

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    function deleteMonsterClickHandler() {
        setDeleteModalOpen(true);
    }
    async function onClickDeleteMonster() {
        await deleteMonster(id);
        setDeleteModalOpen(false);
        navigate("/monsters");
    }

    function editMonsterHandler(){
        navigate(`/editmonster/${id}`)
    }

    return (
        <>
        
            {deleteModalOpen && (
                <ConfirmationModal
                    onDelete={onClickDeleteMonster}
                    onCancel={() => setDeleteModalOpen(false)}
                />
            )}
            <h1>{monsterDetails.name}</h1>
            <div className="monster-details-container">
                <img
                    className="monster-details-image"
                    src={monsterDetails.image}
                    alt={monsterDetails.name}
                />

                <div className="monster-details-text-container">
                    <div className="heading-container">
                        <div className="heading-line"></div>
                        <p className="details-heading"> POWERS:</p>
                    </div>
                    <p> {monsterDetails.powers}</p>
                    <div className="heading-container">
                        <div className="heading-line"></div>
                        <p className="details-heading">WEAKNESSES:</p>
                    </div>
                    <p> {monsterDetails.weaknesses}</p>
                    <div className="heading-container">
                        <div className="heading-line"></div>
                        <p className="details-heading">Author:</p>
                    </div>
                    <p> {monsterDetails.author}</p>
                    { userId === monsterDetails._ownerId &&
                    <div className="monster-button-container">
                        <button onClick={editMonsterHandler}>Edit</button>
                        <button onClick={deleteMonsterClickHandler}>
                            Delete
                        </button>
                    </div>}
                </div>
            </div>
        </>
    );
}
