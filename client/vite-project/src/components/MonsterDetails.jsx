import { useParams } from "react-router";
import { useFetchMonsterDetails } from "../api/monstersApi";

export default function MonsterDetails() {
    const { id } = useParams();
    const { monsterDetails } = useFetchMonsterDetails(id);
    const img =
        "https://cdn.discordapp.com/attachments/343810753976991744/1358896104028241990/ChatGPT_Image_Apr_3_2025_02_56_58_AM.png?ex=67f5821e&is=67f4309e&hm=08656e7694566230bd5eac9400929f2a332a1daf9a35c6fb4e70c2e103c0ae82&";

    return (
        <>
            <h1>{monsterDetails.name}</h1>
            <div className="monster-details-container">
                <img
                    className="monster-details-image"
                    src={img}
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
                    <div className="monster-button-container">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>

            </div>
        </>
    );
}
