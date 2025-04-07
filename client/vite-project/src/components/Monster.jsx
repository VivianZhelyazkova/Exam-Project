export default function Monster({
    _id,
    name,
    image,
    author,
    weaknesses,
    powers,
}) {
    return (
        <div className="monster-card">
            <img
                className="monster-image"
                src={
                    "https://cdn.discordapp.com/attachments/343810753976991744/1358896104028241990/ChatGPT_Image_Apr_3_2025_02_56_58_AM.png?ex=67f5821e&is=67f4309e&hm=08656e7694566230bd5eac9400929f2a332a1daf9a35c6fb4e70c2e103c0ae82&"
                }
                alt={name}
            />
            <p className="monster-card-name">{name}</p>
            
            <p className="monster-card-author">{author}</p>
        </div>
    );
}
