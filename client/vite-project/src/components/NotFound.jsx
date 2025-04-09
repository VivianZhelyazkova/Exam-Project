import witcher from "../assets/notFoundWitcher.png";

export default function NotFound() {
    return (
        <>
            <h2>
                Monsters hide in peculiar places... Unfortunately there isn't
                one here
            </h2>
            <img src={witcher} alt="" />
        </>
    );
}
