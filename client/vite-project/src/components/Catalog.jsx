import { useFetchMonsters } from "../api/monstersApi";
import Monster from "./Monster";

export default function Catalog() {
    const { monsters } = useFetchMonsters();

    return (
        <>
            <h1>Catalog</h1>
            <div className="monsters-catalog">
                {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
                 {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
                 {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
                 {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
                 {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
                 {monsters.map((monster) => (
                    <Monster {...monster} key={monster._id} />
                ))}
            </div>
        </>
    );
}
