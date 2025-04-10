import { useParams } from "react-router";
import { useGetComments, usePostComment } from "../api/commentsApi";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function Comments() {
    const { _id, name } = useAuth();
    const { id } = useParams();

    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    const { allComments } = useGetComments(id);
    const { postComment } = usePostComment();

    useEffect(() => {
        setComments(allComments);
    }, [allComments]);

    function onSubmitCommentHandler() {
        postComment(name, _id, commentText, id).then((comment) => {
            setComments((prev) => {
                return [
                    ...prev,
                    { ...comment, author: { name: comment.author } },
                ];
            });
            setCommentText("")
        });

    }

    return (
        <>
        <h2 className="comments-h2">COMMENTS</h2>
        <div className="comments-container">

            {comments &&
                comments.map((comment) => {
                    return (
                        <div className="column comments-column">
                            <div
                                className="comments-details-container"
                                key={comment._id}
                            >
                                <div className="comment-name">
                                    {comment.author.name}:
                                </div >
                                <div className="comment-text">{comment.text}</div>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            <div className="coments-input-button">
                <input
                    className="comments-input"
                    onChange={(e) => {
                        setCommentText(e.target.value);
                    }}
                    value={commentText || ""}
                    type="text"
                />
                <button onClick={onSubmitCommentHandler}>Comment</button>
            </div>
        </div>
        </>
    );
    
}
