import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/listings`;

export function useFetchMonsters() {
    const [monsters, setMonsters] = useState([]);
    useEffect(() => {
        request.get(baseUrl).then(setMonsters);
    }, []);

    return { monsters };
}

export function useFetchMonsterDetails(id) {
    const [monsterDetails, setMonsterDetails] = useState({});
    useEffect(() => {
        request.get(`${baseUrl}/${id}`).then(setMonsterDetails);
    }, []);
    return { monsterDetails };
}

export function usePostMonster() {
    const { request } = useAuth();
    function postMonster(monsterData) {
        return request.post(baseUrl, monsterData);
    }
    return { postMonster };
}

export function useDeleteMonster() {
    const { request } = useAuth();
    function deleteMonster(id) {
        return request.delete(`${baseUrl}/${id}`);
    }
    return { deleteMonster };
}

export function usePutMonster() {
    const { request } = useAuth();
    function putMonster(id, monsterData) {
        return request.put(`${baseUrl}/${id}`, monsterData);
    }
    return { putMonster };
}
