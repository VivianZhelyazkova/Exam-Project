import { useEffect, useState } from "react";
import request from "../utils/request";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/listings`;


export function useFetchMonsters() {
    const [monsters, setMonsters] = useState([]);
    useEffect(() => {
        request.get(baseUrl).then(setMonsters)
    }, []);

    return {monsters}
}
