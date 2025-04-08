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

export function useFetchMonsterDetails(id){
    const [monsterDetails,setMonsterDetails] = useState({})
    useEffect(()=>{
        request.get(`${baseUrl}/${id}`).then(setMonsterDetails)
    },[])
    return {monsterDetails}
}