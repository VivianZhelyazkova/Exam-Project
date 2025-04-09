import { useNavigate } from "react-router";

export default function Monster({
    _id,
    name,
    image,
    author,
    weaknesses,
    powers,
}) {
    const navigate = useNavigate();
    function monsterDetailsClickHandler() {
        navigate(`/monster/${_id}`);
    }

    return (
        <div className="monster-card" onClick={monsterDetailsClickHandler}>
            <img
                className="monster-image"
                onClick={monsterDetailsClickHandler}
                src={image}
                alt={name}
            />
            <p className="monster-card-name">{name}</p>

            <p className="monster-card-author">{author}</p>
        </div>
    );
}
