import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/comments`;


export function useGetComments(id){
    const [allComments, setAllComments] = useState([])
    const {request} = useAuth()
    useEffect(()=>{
        const searchParams = new URLSearchParams({
            where: `monsterId="${id}"`,
            load: `author=_ownerId:users`,
        });
        request.get(`${baseUrl}?${searchParams.toString()}`).then(setAllComments)

    },[id,request])
    return {allComments}
}

export function usePostComment(){
    const {request} = useAuth()
    function postComment(author,_ownerId, text, monsterId){
        const comment = {author,_ownerId, text, monsterId}
        return request.post(baseUrl,comment)
    }
    return {postComment}
}